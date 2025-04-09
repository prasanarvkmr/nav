// Navbar toggle functionality
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const collapse = document.querySelector(".collapse");

    toggler.addEventListener("click", function () {
        collapse.classList.toggle("show");
    });
});