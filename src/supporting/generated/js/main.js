"use strict";

function nav() {
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
"use strict";

var root = document.documentElement;
document.body.classList.remove('js--disabled');
root.style.setProperty('--width-page', window.innerWidth);
window.addEventListener("resize", function () {
  root.style.setProperty('--width-page', window.innerWidth);
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
});

//# sourceMappingURL=main.js.map