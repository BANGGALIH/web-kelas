// Toggle Class Active
const navbarnav = document.querySelector(".navbar-nav");
// menu di klik
document.querySelector("#menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});
