const headerMobile = document.querySelector(".header-mobile");
const bg = document.querySelector(".bg");
const close = document.querySelector(".header-mobile__item-close");
const burger = document.querySelector(".burger");



function openMenu(event) {
  console.log(headerMobile)
  headerMobile.classList.add("active");
  bg.classList.add("active");
}

function closeMenu() {
  headerMobile.classList.remove("active");
  bg.classList.remove("active");
}

if (burger) {
  burger.addEventListener("click", openMenu);
}

if (close) {
  close.addEventListener("click", closeMenu);
}

if (bg) {
  bg.addEventListener("click", (event) => {
    if (event.target === bg) {
      closeMenu();
    }
  });
}

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    headerMobile.contains(event.target) || burger.contains(event.target);

  if (!isClickInsideMenu && headerMobile.classList.contains("active")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && headerMobile.classList.contains("active")) {
    closeMenu();
  }
});
