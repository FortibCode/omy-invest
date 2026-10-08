import React, { useEffect, useRef } from 'react';

/**
 * CustomCursor — Un curseur personnalisé ultra-fluide, dynamique et haut de gamme.
 * Combines:
 * - Un point central réactif (Inner Dot)
 * - Un anneau néon avec suivi à inertie (Lerped Neon Ring)
 * - Une traînée de particules lumineuses sur Canvas (Particle Trail)
 * - Ondulations et impulsions au clic (Click Ripples)
 * - Détection automatique des survols (Boutons, Liens, Cartes, Champs de texte)
 * - Désactivation automatique sur écran tactile et pour 'prefers-reduced-motion'
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. Vérification écran tactile ou préférence de réduction de mouvement
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    // Activer la classe CSS sur body pour masquer le curseur par défaut (sauf sur les inputs)
    document.body.classList.add('custom-cursor-active');

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Adapter le canvas à la taille de la fenêtre
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Coordonnées et état
    const mouse = { x: width / 2, y: height / 2, lastX: width / 2, lastY: height / 2, speed: 0 };
    const ring = { x: width / 2, y: height / 2 };
    let isVisible = true;
    let isHovered = false;
    let isClicking = false;
    let isTextInput = false;
    let hoverType = null; // 'button' | 'link' | 'card' | 'input'

    // Particules & Ripples
    const particles = [];
    const ripples = [];
    let animationFrameId = null;
    let idleTimer = null;
    let isIdle = false;

    // Réinitialiser le timer d'inactivité
    const resetIdleTimer = () => {
      isIdle = false;
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
      }, 2500);
    };

    // Spawn de particule lumineuse
    const spawnParticle = (x, y, speed) => {
      if (particles.length > 35) return; // Limiter pour préserver 60fps
      const angle = Math.random() * Math.PI * 2;
      const velocity = 0.4 + Math.random() * Math.min(speed * 0.1, 2.5);
      particles.push({
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: 1.5 + Math.random() * 2.5,
        alpha: 0.8,
        color: Math.random() > 0.4 ? 'rgba(56, 189, 248, ' : 'rgba(255, 255, 255, ', // Cyan ou blanc
        decay: 0.02 + Math.random() * 0.03,
      });
    };

    // Spawn d'impulsion au clic (Ripple)
    const spawnRipple = (x, y) => {
      ripples.push({
        x,
        y,
        radius: 6,
        maxRadius: 36,
        alpha: 0.8,
        decay: 0.04,
      });
    };

    // Événement MouseMove
    const onMouseMove = (e) => {
      resetIdleTimer();
      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (canvasRef.current) canvasRef.current.style.opacity = '1';
      }

      const dx = e.clientX - mouse.lastX;
      const dy = e.clientY - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);

      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;

      // Spawner particules si le mouvement est rapide
      if (mouse.speed > 3 && !isTextInput) {
        spawnParticle(mouse.x, mouse.y, mouse.speed);
      }
    };

    // Survol d'éléments interactifs via délégation d'événements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor], .consult-card, .bvmac-card'
      );

      if (interactive) {
        const tagName = interactive.tagName.toLowerCase();

        if (tagName === 'input' || tagName === 'textarea' || tagName === 'select' || interactive.isContentEditable) {
          isTextInput = true;
          isHovered = false;
          hoverType = 'input';
        } else if (interactive.classList.contains('consult-card') || interactive.classList.contains('bvmac-card') || interactive.getAttribute('data-cursor') === 'card') {
          isTextInput = false;
          isHovered = true;
          hoverType = 'card';
        } else {
          isTextInput = false;
          isHovered = true;
          hoverType = 'button';
        }
      } else {
        isHovered = false;
        isTextInput = false;
        hoverType = null;
      }
    };

    const onMouseDown = () => {
      isClicking = true;
      spawnRipple(mouse.x, mouse.y);
    };

    const onMouseUp = () => {
      isClicking = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (canvasRef.current) canvasRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (canvasRef.current) canvasRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });

    // Boucle d'animation principale (60 FPS)
    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      // Si masqué ou au repos depuis longtemps sans particules à afficher, éviter les calculs lourds
      if (!isVisible) return;
      if (isIdle && particles.length === 0 && ripples.length === 0) {
        // Mettre à jour la position au moins une fois
      }

      // 1. Mise à jour du point central (instantané)
      if (dotRef.current) {
        if (isTextInput) {
          dotRef.current.style.opacity = '0';
        } else {
          dotRef.current.style.opacity = isVisible ? '1' : '0';
          dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.6 : isHovered ? 0.5 : 1
          })`;
        }
      }

      // 2. Interpolation fluide de l'anneau néon (Lerp)
      const ease = 0.18;
      ring.x += (mouse.x - ring.x) * ease;
      ring.y += (mouse.y - ring.y) * ease;

      if (ringRef.current) {
        if (isTextInput) {
          ringRef.current.style.opacity = '0';
        } else {
          ringRef.current.style.opacity = isVisible ? '1' : '0';

          let scale = 1;
          if (isClicking) scale = 0.85;
          else if (hoverType === 'card') scale = 1.6;
          else if (hoverType === 'button') scale = 1.4;

          ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${scale})`;
          
          if (isHovered) {
            ringRef.current.classList.add('cursor-ring-hover');
          } else {
            ringRef.current.classList.remove('cursor-ring-hover');
          }
        }
      }

      // 3. Dessin des particules & Ripples sur le Canvas
      ctx.clearRect(0, 0, width, height);

      // Dessiner les ripples (impulsions au clic)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += (r.maxRadius - r.radius) * 0.25;
        r.alpha -= r.decay;

        if (r.alpha <= 0) {
          ripples.splice(i, 1);
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(56, 189, 248, ${r.alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        }
      }

      // Dessiner la traînée de particules
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size *= 0.96;

        if (p.alpha <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.alpha})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
          ctx.fill();
          ctx.restore();
        }
      }
    };

    render();

    // Nettoyage complet
    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (idleTimer) clearTimeout(idleTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* ── CANVAS DES PARTICULES & RIPPLES ── */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[99998] transition-opacity duration-300"
      />

      {/* ── POINT CENTRAL (DOT) ── */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-sky-400 border border-white pointer-events-none z-[99999] shadow-[0_0_8px_rgba(56,189,248,0.9)] transition-opacity duration-200"
        style={{ willChange: 'transform' }}
      />

      {/* ── ANNEAU NÉON À INERTIE (RING) ── */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-sky-400/70 pointer-events-none z-[99999] shadow-[0_0_14px_rgba(56,189,248,0.4)] transition-[opacity,border-color,background-color,box-shadow] duration-200"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
