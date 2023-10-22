document.addEventListener("DOMContentLoaded", function () {
  const headerMobileButton = document.querySelector(".header__mobile-button");
  const mobileMenu = document.querySelector(".mobile-menu").classList;
  const headerBurgerIcon = document.querySelector(".header__burger-icon").classList;
  const headerCloseIcon = document.querySelector(".header__close-icon").classList;
  const body = document.querySelector("body").classList;

  const VISIBLE_CLASS = "visible";
  
  headerMobileButton.addEventListener("click", function () {
    const isMobileMenuVisible = mobileMenu.contains(VISIBLE_CLASS);

    if (isMobileMenuVisible) {
      // Close mobile menu
      mobileMenu.remove(VISIBLE_CLASS);
      headerCloseIcon.remove(VISIBLE_CLASS);
      body.remove("hidden");
      headerBurgerIcon.add(VISIBLE_CLASS);
    } else {
      // Open mobile menu
      mobileMenu.add(VISIBLE_CLASS);
      headerCloseIcon.add(VISIBLE_CLASS);
      body.add("hidden");
      headerBurgerIcon.remove(VISIBLE_CLASS);
    }
  })
});