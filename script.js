const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu__toggle");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        toggle.querySelector("a").innerHTML = "<i class=’uil uil-bars’></i>";
    } else {
        menu.classList.add("active");
    
        toggle.querySelector("a").innerHTML = "<i class=’uil uil-bars’></i>";
    }
}

toggle.addEventListener("click", toggleMenu, false);