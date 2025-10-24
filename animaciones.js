document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }, { threshold: 0.3 });

  //  Observa todos los elementos con fade-up
  document.querySelectorAll(".fade-side, .fade-right, .fade-up").forEach(el => {
    observer.observe(el);
  });
});

const fonts = [
  '"Roboto", sans-serif',
  '"Oswald", sans-serif',
  '"Merriweather", serif',
  '"Fira Mono", monospace',
  '"Pacifico", cursive'
];

const textElement = document.getElementById("text");
const text = textElement.textContent;
textElement.innerHTML = "";

for (let char of text) {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char; // mantener espacios
  textElement.appendChild(span);

  span.addEventListener("mouseenter", () => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    span.style.fontFamily = randomFont;
    span.classList.add("active");

    // Después de 1.5 segundos (1500 ms), vuelve al estilo original
    setTimeout(() => {
      span.style.fontFamily = "";
      span.classList.remove("active");
    }, 1500);
  });
}

// JS mínimo (aumentaremos luego)
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mostrar navbar solo después de pasar el video (hero)
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");

  const heroBottom = hero.offsetTop + hero.offsetHeight;

  if (window.scrollY > heroBottom - 100) { // margen para activar antes
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
});
