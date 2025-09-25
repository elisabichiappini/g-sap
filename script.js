"use strict"

    const g1 = document.getElementById("g1");
    const g2 = document.getElementById("g2");

    // centro della finestra
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    window.addEventListener("mousemove", (e) => {
      const offsetX = (e.clientX - centerX) / centerX; // da -1 a 1
      const offsetY = (e.clientY - centerY) / centerY; // da -1 a 1

      // Animazione con GSAP
      gsap.to(g1, {
        x: offsetX * 30,   // sposta la prima G
        y: offsetY * 30,
        rotationY: offsetX * 15,
        duration: 0.5,
        ease: "power3.out"
      });

      gsap.to(g2, {
        x: offsetX * -30,  // sposta la seconda G in direzione opposta
        y: offsetY * -30,
        rotationY: offsetX * -15,
        duration: 0.5,
        ease: "power3.out"
      });
    });
