let root = document.documentElement;
document.body.classList.remove('js--disabled')
root.style.setProperty('--width-page', window.innerWidth);

window.addEventListener("resize", () => {
  root.style.setProperty('--width-page', window.innerWidth);
});
/*
window.addEventListener("scroll", () => {
  root.style.setProperty('--scroll-y', window.scrollY)
});
*/

let lastKnownScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
    root.style.setProperty('--scroll-y', lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
