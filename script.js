window.addEventListener("load", () => {
    const menu = document.querySelector(".menu");
    const toggle = document.querySelector(".uil .uil-bars");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});