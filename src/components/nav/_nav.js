function nav() {
  return {
    submenu: false,
    openSubmenu(menu) {
      this.submenu = menu
    },
    tester(e) {
      console.log(e)
      console.log(this)
    },
    isSubmenuOpen(menu) {
      return menu === this.submenu
    },
    closeSubmenus() {
      this.submenu = false
    },
    listenForEscape() {
      // Use ES6 notation so that `this` refers to this component
      // (a proud moment that John remembered this differentiation)
      window.addEventListener('keypress', (e) => {
        if(e.code === 'Escape') {
          this.closeSubmenus()
        }
      });
    }
  }
}
