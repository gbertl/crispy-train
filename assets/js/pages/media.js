document
  .querySelector('#media-menu-btn').addEventListener("click", () => {
    console.log("click");
    document.querySelector(".offcanvas-wrap").classList.add("offcanvas-wrap-active");
    document.querySelector(".offcanvas-wrap").classList.add("offcanvas-wrap-right");
    // document.querySelector(".offcanvas-panel.offcanvas-panel-right").attributes.style.value = 'display:block'
  });

document
  .querySelector('#media-menu-close-btn').addEventListener("click", () => {
    document.querySelector(".offcanvas-wrap").classList.remove("offcanvas-wrap-active");
    document.querySelector(".offcanvas-wrap").classList.remove("offcanvas-wrap-right");
    // document.querySelector(".offcanvas-panel.offcanvas-panel-right").attributes.style.value = 'display:none'
  });