import z from "zod";

export const QuoteSchema = z.object({
  id: z.number(),
  user_id: z.string().nullable(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  message: z.string(),
  status: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const ContactMessageSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string().nullable(),
  message: z.string(),
  type: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
});

export const UserProfileSchema = z.object({
  id: z.number(),
  user_id: z.string(),
  phone: z.string().nullable(),
  profile_picture_url: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Quote = z.infer<typeof QuoteSchema>;
export type ContactMessage = z.infer<typeof ContactMessageSchema>;
export type UserProfile = z.infer<typeof UserProfileSchema>;
