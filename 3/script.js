"use strict"
    document.addEventListener('DOMContentLoaded', () => {
      const top = document.querySelectorAll('.row.top .letter');
      const bottom = document.querySelectorAll('.row.bottom .letter');
      const n = Math.min(top.length, bottom.length);
      gsap.set([...top, ...bottom], { scaleY: 1 });

      const enter = (a, b) => {
        gsap.killTweensOf([a, b]);
        gsap.to(a, { scaleY: 1.6, duration: 0.35, ease: 'power3.out' });
        gsap.to(b, { scaleY: 0.6, duration: 0.35, ease: 'power3.out' });
      };
      const leave = (a, b) => {
        gsap.killTweensOf([a, b]);
        gsap.to([a, b], { scaleY: 1, duration: 0.35, ease: 'power3.out' });
      };

      for (let i = 0; i < n; i++) {
        const a = top[i], b = bottom[i];
        [[a, b], [b, a]].forEach(([x, y]) => {
          x.addEventListener('mouseenter', () => enter(x, y));
          x.addEventListener('mouseleave', () => leave(x, y));
          x.addEventListener('focus', () => enter(x, y));
          x.addEventListener('blur', () => leave(x, y));
        });
      }
    });
