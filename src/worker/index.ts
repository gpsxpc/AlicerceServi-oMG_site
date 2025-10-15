import { Hono } from "hono";
import { cors } from "hono/cors";
import { getCookie, setCookie } from "hono/cookie";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import {
  exchangeCodeForSessionToken,
  getOAuthRedirectUrl,
  authMiddleware,
  deleteSession,
  MOCHA_SESSION_TOKEN_COOKIE_NAME,
  getCurrentUser,
} from "@getmocha/users-service/backend";

const app = new Hono<{ Bindings: Env }>();

app.use("*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// OAuth endpoints
app.get('/api/oauth/google/redirect_url', async (c) => {
  const redirectUrl = await getOAuthRedirectUrl('google', {
    apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
    apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
  });

  return c.json({ redirectUrl }, 200);
});

app.post("/api/sessions", zValidator("json", z.object({
  code: z.string(),
})), async (c) => {
  const { code } = c.req.valid("json");

  const sessionToken = await exchangeCodeForSessionToken(code, {
    apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
    apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
  });

  setCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    path: "/",
    sameSite: "none",
    secure: true,
    maxAge: 60 * 24 * 60 * 60, // 60 days
  });

  return c.json({ success: true }, 200);
});

app.get("/api/users/me", authMiddleware, async (c) => {
  return c.json(c.get("user"));
});

app.get('/api/logout', async (c) => {
  const sessionToken = getCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME);

  if (typeof sessionToken === 'string') {
    await deleteSession(sessionToken, {
      apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
      apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
    });
  }

  setCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME, '', {
    httpOnly: true,
    path: '/',
    sameSite: 'none',
    secure: true,
    maxAge: 0,
  });

  return c.json({ success: true }, 200);
});

// User profile endpoints
app.get("/api/profile", authMiddleware, async (c) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "User not found" }, 401);
  }
  
  const profile = await c.env.DB.prepare(
    "SELECT * FROM user_profiles WHERE user_id = ?"
  ).bind(user.id).first();

  return c.json({
    user,
    profile: profile || null
  });
});

app.post("/api/profile", authMiddleware, zValidator("json", z.object({
  phone: z.string().optional(),
  profile_picture_url: z.string().optional(),
})), async (c) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "User not found" }, 401);
  }
  const { phone, profile_picture_url } = c.req.valid("json");

  const existing = await c.env.DB.prepare(
    "SELECT id FROM user_profiles WHERE user_id = ?"
  ).bind(user.id).first();

  if (existing) {
    await c.env.DB.prepare(
      "UPDATE user_profiles SET phone = ?, profile_picture_url = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?"
    ).bind(phone || null, profile_picture_url || null, user.id).run();
  } else {
    await c.env.DB.prepare(
      "INSERT INTO user_profiles (user_id, phone, profile_picture_url) VALUES (?, ?, ?)"
    ).bind(user.id, phone || null, profile_picture_url || null).run();
  }

  return c.json({ success: true });
});

// Quote requests
app.post("/api/quotes", zValidator("json", z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().min(1),
})), async (c) => {
  const { name, email, phone, message } = c.req.valid("json");
  
  // Get user if authenticated
  const sessionToken = getCookie(c, MOCHA_SESSION_TOKEN_COOKIE_NAME);
  let userId = null;
  
  if (sessionToken) {
    try {
      const user = await getCurrentUser(sessionToken, {
        apiUrl: c.env.MOCHA_USERS_SERVICE_API_URL,
        apiKey: c.env.MOCHA_USERS_SERVICE_API_KEY,
      });
      userId = user?.id || null;
    } catch (error) {
      // User not authenticated, continue without user_id
    }
  }

  await c.env.DB.prepare(
    "INSERT INTO quotes (user_id, name, email, phone, message) VALUES (?, ?, ?, ?, ?)"
  ).bind(userId, name, email, phone, message).run();

  return c.json({ success: true, message: "Orçamento solicitado com sucesso!" });
});

app.get("/api/quotes", authMiddleware, async (c) => {
  const user = c.get("user");
  if (!user) {
    return c.json({ error: "User not found" }, 401);
  }
  
  const { results } = await c.env.DB.prepare(
    "SELECT * FROM quotes WHERE user_id = ? ORDER BY created_at DESC"
  ).bind(user.id).all();

  return c.json(results);
});

// Contact messages
app.post("/api/contact", zValidator("json", z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
  type: z.string().default('contact'),
})), async (c) => {
  const { name, email, phone, message, type } = c.req.valid("json");

  await c.env.DB.prepare(
    "INSERT INTO contact_messages (name, email, phone, message, type) VALUES (?, ?, ?, ?, ?)"
  ).bind(name, email, phone || null, message, type).run();

  return c.json({ success: true, message: "Mensagem enviada com sucesso!" });
});

export default app;
