let root = document.documentElement;
document.body.classList.remove('js--disabled')
root.style.setProperty('--width-page', window.innerWidth);
updateEnvRemValues();

window.addEventListener("resize", () => {
  root.style.setProperty('--width-page', window.innerWidth);
  updateEnvRemValues();
});

var lastKnownScrollPosition = 0;
var ticking = false;

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

// Take in the pixel-value string as defined in the environment variable and
// placed into a custom property, and convert it to rems so that it works
// nicely with responsive transforms in CSS.
function updateEnvRemValues() {
  const computedStyle = getComputedStyle(document.documentElement)
  const envList = ['--env-safe-top','--env-safe-right','--env-safe-bottom','--env-safe-left'];

  envList.forEach((env) => {
    var value = parseInt(computedStyle.getPropertyValue(env + '-pixels'), 10);
    var remValue = value / computedStyle.getPropertyValue('--rem-base');

    root.style.setProperty(env, remValue);
  })
}

window.addEventListener('load', () => {
  document.body.classList.add('js--ready');
})
