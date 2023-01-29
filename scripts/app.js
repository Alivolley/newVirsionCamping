const $ = document;
const menuOpener = $.querySelector(".menu-opener");
const collapseMenu = $.querySelector(".collapse-menu");
const placeIcons = $.querySelectorAll(".place__icon");
// const likeIcon = $.querySelector(".place__icon-svg");

placeIcons.forEach((icon) => {
   icon.addEventListener("click", () => {
      icon.classList.toggle("place__icon--like");
   });
});

function showCollapseMenu() {
   collapseMenu.classList.toggle("collapse-menu--show");
   menuOpener.classList.toggle("menu-opener--hide");
}

menuOpener.addEventListener("click", showCollapseMenu);
