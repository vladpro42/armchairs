const headerMobile = document.querySelector(".header-mobile");
const bg = document.querySelector(".bg");
const close = document.querySelector(".header-mobile__item-close");
const burger = document.querySelector(".burger");

// Функция для открытия меню
function openMenu(event) {
  console.log(event)
  headerMobile.classList.add("active");
  bg.classList.add("active");
}

// Функция для закрытия меню
function closeMenu() {
  headerMobile.classList.remove("active");
  bg.classList.remove("active");
}

// Открытие по клику на бургер
if (burger) {
  burger.addEventListener("click", openMenu);
}

// Закрытие по клику на крестик
if (close) {
  close.addEventListener("click", closeMenu);
}

// Закрытие по клику на фон
if (bg) {
  bg.addEventListener("click", (event) => {
    if (event.target === bg) {
      closeMenu();
    }
  });
}

// Закрытие по клику вне меню (альтернативный вариант)
document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    headerMobile.contains(event.target) || burger.contains(event.target);

  if (!isClickInsideMenu && headerMobile.classList.contains("active")) {
    closeMenu();
  }
});

// Закрытие по нажатию Esc
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && headerMobile.classList.contains("active")) {
    closeMenu();
  }
});
