"use strict";

const jumbo = document.getElementById("jumbo");
const g1 = document.getElementById("g1");
const g2 = document.getElementById("g2");
const svg = document.getElementById("logoSvg");

// Punto di riferimento: centro del container
function getCenter(el) {
    const rect = el.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 5,
        y: rect.top + rect.height / 2
    };
}

let center = getCenter(jumbo);

window.addEventListener('resize', () => {
    center = getCenter(jumbo);
});

jumbo.addEventListener("mousemove", (e) => {
    // calcola offset da centro, normalizzato in [-1,1]
    const offsetX = (e.clientX - center.x) / center.x;
    const offsetY = (e.clientY - center.y) / center.y;

    // Applica trasformazioni
    // Il primo “G” si muove più in un verso, il secondo opposto
    gsap.to(g1, {
        x: offsetX * 40,
        y: offsetY * 40,
        rotation: offsetX * 15,
        transformOrigin: "center center",
        duration: 0.6,
        ease: "power3.out"
    });
    gsap.to(g2, {
        x: offsetX * -40,
        y: offsetY * -40,
        rotation: offsetX * -15,
        transformOrigin: "center center",
        duration: 0.6,
        ease: "power3.out"
    });
});

// (Opzionale) quando il mouse esce, ritorna allo stato iniziale
jumbo.addEventListener("mouseleave", () => {
    gsap.to([g1, g2], {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1,
        ease: "power3.out"
    });
});