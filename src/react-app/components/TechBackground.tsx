import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function TechBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create flowing waves with particles
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Mix of blue and orange colors
      const colorChoice = Math.random();
      if (colorChoice > 0.7) {
        // Orange particles
        colors[i * 3] = 1.0;     // R
        colors[i * 3 + 1] = 0.4; // G
        colors[i * 3 + 2] = 0.0; // B
      } else {
        // Blue particles
        colors[i * 3] = 0.1;     // R
        colors[i * 3 + 1] = 0.3; // G
        colors[i * 3 + 2] = 0.8; // B
      }
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create connecting lines
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x1a5299,
      transparent: true,
      opacity: 0.1
    });

    const linePositions = new Float32Array(600); // 100 lines * 6 coordinates
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    camera.position.z = 5;

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01;

      // Animate particles with wave motion and mouse interaction
      const positionAttribute = particleGeometry.getAttribute('position');
      for (let i = 0; i < particleCount; i++) {
        const x = positionAttribute.getX(i);
        const z = positionAttribute.getZ(i);
        
        // Add subtle mouse influence
        const mouseInfluence = 0.2;
        const mouseX = mouseRef.current.x * mouseInfluence;
        const mouseY = mouseRef.current.y * mouseInfluence;
        
        positionAttribute.setY(i, 
          Math.sin(time + x * 0.5) * 0.5 + 
          Math.cos(time + z * 0.3) * 0.3 + 
          mouseY * Math.sin(x * 2 + time) * 0.1
        );
        
        positionAttribute.setX(i, x + mouseX * Math.cos(z * 2 + time) * 0.05);
      }
      positionAttribute.needsUpdate = true;

      // Update connecting lines
      const linePositionAttribute = lines.geometry.getAttribute('position');
      let lineIndex = 0;
      
      for (let i = 0; i < particleCount && lineIndex < 200; i++) {
        for (let j = i + 1; j < particleCount && lineIndex < 200; j++) {
          const dx = positionAttribute.getX(i) - positionAttribute.getX(j);
          const dy = positionAttribute.getY(i) - positionAttribute.getY(j);
          const dz = positionAttribute.getZ(i) - positionAttribute.getZ(j);
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 2.5) {
            linePositionAttribute.setXYZ(lineIndex * 2, 
              positionAttribute.getX(i), 
              positionAttribute.getY(i), 
              positionAttribute.getZ(i)
            );
            linePositionAttribute.setXYZ(lineIndex * 2 + 1, 
              positionAttribute.getX(j), 
              positionAttribute.getY(j), 
              positionAttribute.getZ(j)
            );
            lineIndex++;
          }
        }
      }
      linePositionAttribute.needsUpdate = true;

      // Rotate the entire particle system slowly
      particles.rotation.y += 0.002;
      lines.rotation.y += 0.002;

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
