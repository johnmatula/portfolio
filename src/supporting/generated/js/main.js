"use strict";

function sidebar() {
  return {
    submenu: false,
    openSubmenu: function openSubmenu(menu) {
      this.submenu = menu;
    },
    tester: function tester(e) {
      console.log(e);
      console.log(this);
    },
    isSubmenuOpen: function isSubmenuOpen(menu) {
      return menu === this.submenu;
    },
    closeSubmenus: function closeSubmenus() {
      this.submenu = false;
    },
    listenForEscape: function listenForEscape() {
      var _this = this;

      // Use ES6 notation so that `this` refers to this component
      // (a proud moment that John remembered this differentiation)
      window.addEventListener('keypress', function (e) {
        if (e.code === 'Escape') {
          _this.closeSubmenus();
        }
      });
    }
  };
}

window.addEventListener("load", function () {
  document.body.classList.add("js--ready");
});
"use strict";

var root = document.documentElement;
document.body.classList.remove('js--disabled');
root.style.setProperty('--width-page', window.innerWidth);
updateEnvRemValues();
window.addEventListener("resize", function () {
  root.style.setProperty('--width-page', window.innerWidth);
  updateEnvRemValues();
});
var lastKnownScrollPosition = 0;
var ticking = false;
window.addEventListener('scroll', function (e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      root.style.setProperty('--scroll-y', lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
}); // Take in the pixel-value string as defined in the environment variable and
// placed into a custom property, and convert it to rems so that it works
// nicely with responsive transforms in CSS.

function updateEnvRemValues() {
  var computedStyle = getComputedStyle(document.documentElement);
  var envList = ['--env-safe-top', '--env-safe-right', '--env-safe-bottom', '--env-safe-left'];
  envList.forEach(function (env) {
    var value = parseInt(computedStyle.getPropertyValue(env + '-pixels'), 10);
    var remValue = value / computedStyle.getPropertyValue('--rem-base');
    root.style.setProperty(env, remValue);
  });
}

//# sourceMappingURL=main.js.map