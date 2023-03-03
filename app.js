// * nav hamburger menu
const nav = document.querySelector("nav");
const icon = document.querySelector(".icon");
const menu = document.querySelector(".expand");

icon.addEventListener("mouseenter", () => {
    // menu.style.transition = "2s";
    menu.style.display = "inline";
});

nav.addEventListener("mouseleave", () => {
    menu.style.display = "none";
})

