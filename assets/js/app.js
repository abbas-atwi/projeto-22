let menuOpen = document.querySelector(".menu-bg");
let menu = document.querySelector(".menu nav");
menuOpen.addEventListener("click", () => {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
