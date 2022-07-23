(() => {
  const menuBtn = document.querySelector(".burger-btn");
  const menu = document.querySelector(".header__menu");
  const body = document.body;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("burger-btn--active");
    menu.classList.toggle("header__menu--active");
    body.classList.toggle("no-scroll");
  })
})();