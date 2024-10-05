import React, { useEffect, useRef } from 'react';

const SmoothParticle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      x: any;
      y: any;
      size: number;
      baseSize: any;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      pulseSpeed: number;
      pulseFactor: number;
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1; // Reduced size range
        this.baseSize = this.size;
        this.speedX = Math.random() * 0.5 - 0.25; // Reduced speed
        this.speedY = Math.random() * 0.5 - 0.25; // Reduced speed
        this.color = Math.random() < 0.8 ? '#6D4AFF' : '#9786FA';
        this.opacity = Math.random() * 0.5 + 0.3; // Base opacity
        this.pulseSpeed = Math.random() * 0.02 + 0.01; // Speed of size pulsing
        this.pulseFactor = 0; // Factor for smooth pulsing
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Smooth pulsing of size and opacity
        this.pulseFactor += this.pulseSpeed;
        this.size = this.baseSize + Math.sin(this.pulseFactor) * 0.5;
        this.opacity = 0.3 + Math.sin(this.pulseFactor) * 0.2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();

        // Soft glow effect
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }
    }

    const particleCount = 120; // Reduced particle count
    let particles = [];

    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(Math.random()^2 * canvas.width, Math.random() * canvas.height));
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#FFFFFF',
        zIndex: -1
      }}
    />
  );
};

export default SmoothParticle;
