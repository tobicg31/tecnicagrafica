window.addEventListener("load", () => {
  const loader = document.getElementById("intro-loader");

  // Espera el final de la animación antes de ocultarlo
  setTimeout(() => {
    loader.classList.add("hide");
  }, 2500); // dura lo mismo que la animación del logo (2.5s)
});
