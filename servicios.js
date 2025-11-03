document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("serviciosimg");
  const lightboxImg = lightbox.querySelector("img");
  const workImages = Array.from(document.querySelectorAll(".servicios img"));
  const prevBtn = document.getElementById("atras-btn");
  const nextBtn = document.getElementById("sig-btn");

  let currentIndex = 0;

  // Mostrar imagen seleccionada
  function showImage(index) {
    const img = workImages[index];
    if (!img) return;
    lightboxImg.src = img.src;
    currentIndex = index;
    lightbox.classList.add("show");
    document.body.classList.add("no-scroll");
  }

  // Navegación
  function showNext() {
    currentIndex = (currentIndex + 1) % workImages.length;
    showImage(currentIndex);
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + workImages.length) % workImages.length;
    showImage(currentIndex);
  }

  // Click en imágenes
  workImages.forEach((img, index) => {
    img.addEventListener("click", () => showImage(index));
  });

  // Click en fondo o imagen = cerrar
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.remove("show");
      document.body.classList.remove("no-scroll");
    }
  });

  // Click en botones
  nextBtn.addEventListener("click", e => {
    e.stopPropagation();
    showNext();
  });

  prevBtn.addEventListener("click", e => {
    e.stopPropagation();
    showPrev();
  });

  // Navegación con teclado
  document.addEventListener("keydown", e => {
    if (!lightbox.classList.contains("show")) return;

    if (e.key === "Escape") {
      lightbox.classList.remove("show");
      document.body.classList.remove("no-scroll");
    } else if (e.key === "ArrowRight") {
      showNext();
    } else if (e.key === "ArrowLeft") {
      showPrev();
    }
  });
});