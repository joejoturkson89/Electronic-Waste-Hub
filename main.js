const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");

});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  }

  scrollRevealOption().reveal(".container__left h1", {
    ...scrollRevealOption,
  })

  scrollRevealOption().reveal(".container__left .container__btn", {
    ...scrollRevealOption,
    delay: 500,
  });

  scrollRevealOption().reveal(".container__right h4", {
    ...scrollRevealOption,
    delay: 2000,
  });