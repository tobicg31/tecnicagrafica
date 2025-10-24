
// Duración total de la animación (en milisegundos)
const duration = 3000;

// Función que anima los contadores
function animateCounters(selector) {
  const counters = document.querySelectorAll(selector);

  counters.forEach(counter => {
    const endValue = parseInt(counter.getAttribute("data-val"));
    let startValue = 0;
    const frameRate = 60; // cuadros por segundo
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let currentFrame = 0;

    const counterAnimation = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const value = Math.floor(progress * endValue);
      counter.textContent = value;

      if (currentFrame >= totalFrames) {
        counter.textContent = endValue;
        clearInterval(counterAnimation);
      }
    }, 1000 / frameRate);
  });
}

// Observador para detectar cuando los contadores entran en pantalla
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted"); // evita repetir la animación
        if (entry.target.classList.contains("num")) {
          animateCounters(".num");
        } else if (entry.target.classList.contains("num-lg")) {
          animateCounters(".num-lg");
        }
      }
    });
  },
  { threshold: 0.4 } // se activa cuando el 40% del elemento está visible
);

// Aplicamos el observador a todos los contadores
document.querySelectorAll(".num, .num-lg").forEach(el => observer.observe(el));
/*
 ---------------------------------------------------------------------------------------------------
 aca abajo los contadores se reinician cada vez q aparecen en pantalla

// Duración total de la animación (en milisegundos)
const duration = 3000;

// Función que anima los contadores
function animateCounters(selector) {
  const counters = document.querySelectorAll(selector);

  counters.forEach(counter => {
    const endValue = parseInt(counter.getAttribute("data-val"));
    let startValue = 0;
    const frameRate = 60; // cuadros por segundo
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let currentFrame = 0;

    const counterAnimation = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const value = Math.floor(progress * endValue);
      counter.textContent = value;

      if (currentFrame >= totalFrames) {
        counter.textContent = endValue;
        clearInterval(counterAnimation);
      }
    }, 1000 / frameRate);
  });
}

// Observador para detectar cuando los contadores entran en pantalla
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("num")) {
          animateCounters(".num");
        } else if (entry.target.classList.contains("num-lg")) {
          animateCounters(".num-lg");
        }
      } else {
        // Cuando el elemento sale de pantalla, lo reseteamos a 0
        entry.target.textContent = "0";
      }
    });
  },
  { threshold: 0.4 } // se activa cuando el 40% del elemento está visible
);

// Aplicamos el observador a todos los contadores
document.querySelectorAll(".num, .num-lg").forEach(el => observer.observe(el));
*/