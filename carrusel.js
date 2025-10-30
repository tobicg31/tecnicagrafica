document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector("#carouselBrands");
  const carouselInner = carousel.querySelector(".carousel-inner");
  const indicatorsContainer = carousel.querySelector(".carousel-indicators");
  const allLogos = Array.from(carouselInner.querySelectorAll(".brand-logo"));

  function rebuildCarousel() {
    // Limpia slides e indicadores
    carouselInner.innerHTML = "";
    indicatorsContainer.innerHTML = "";

    // Cantidad de logos por slide según ancho
    let perSlide = 5;
    const width = window.innerWidth;
    if (width < 431) 
      perSlide = 4; // ← antes era 2, ahora 4 logos en pantallas chicas
    else if (width < 992) 
      perSlide = 2;

    // Agrupar logos
    const numSlides = Math.ceil(allLogos.length / perSlide);

    for (let i = 0; i < numSlides; i++) {
      const slide = document.createElement("div");
      slide.className = "carousel-item" + (i === 0 ? " active" : "");
      slide.setAttribute("data-bs-interval", "2000"); // ← intervalo de 1s

      const group = document.createElement("div");
      if (width < 431)
        group.className ="d-flex justify-content-center gap-4 align-items-center flex-wrap";
      else
        group.className ="d-flex justify-content-center gap-4 align-items-center";


      // Tomar los logos del grupo
      allLogos
        .slice(i * perSlide, (i + 1) * perSlide)
        .forEach((logo) => group.appendChild(logo.cloneNode(true)));

      slide.appendChild(group);
      carouselInner.appendChild(slide);

      // Crear indicador
      const indicator = document.createElement("button");
      indicator.type = "button";
      indicator.dataset.bsTarget = "#carouselBrands";
      indicator.dataset.bsSlideTo = i;
      indicator.setAttribute("aria-label", `Slide ${i + 1}`);
      if (i === 0) {
        indicator.classList.add("active");
        indicator.setAttribute("aria-current", "true");
      }
      indicatorsContainer.appendChild(indicator);
    }
  }

  rebuildCarousel(); // Construye al inicio
  window.addEventListener("resize", rebuildCarousel); // Reconstruye al cambiar tamaño
});

