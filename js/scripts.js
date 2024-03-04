let hamburger = document.querySelector(".hamburger"),
    header_flex = document.querySelector(".header_flex"),
    nav = document.querySelector(".head_menu");
hamburger.onclick = function() {
    nav.classList.toggle("mobile_nav"),
    header_flex.classList.toggle("header_block"),
    hamburger.classList.toggle("hamburger_open");
}