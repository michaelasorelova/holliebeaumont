window.addEventListener("load", () => {
    const menu = document.querySelector(".nav");
    const toggle = document.querySelector(".hamburger");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});