function contact() {
  return {
    sendSidebarCloseEvent() {
      window.dispatchEvent(new Event('closeButtonClick'));
    }
  }
}
