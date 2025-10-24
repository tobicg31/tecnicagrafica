const nav = document.querySelector('.navbar');
  const setBodyOffset = () => {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  };
  setBodyOffset();
  window.addEventListener('resize', setBodyOffset);

  // sólido al scrollear (como ya tenías)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) nav.classList.add('is-stuck');
    else nav.classList.remove('is-stuck');
  }, { passive: true });