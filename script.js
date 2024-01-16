const headerMenu = document.querySelector("#header-menu");
const navbarMenu = document.querySelector("#navbar");

const style = {
    hide: "hidden",
    show: "auto"
}

// Navbar
const toggleHeader = () => {
    if (navbarMenu.classList.contains("open")) {
        document.body.style.setProperty("overflow", style.show);
    } else {
        document.body.style.setProperty("overflow", style.hide);
    }
    navbarMenu.classList.toggle("open");
    headerMenu.classList.toggle("open");
}

headerMenu.addEventListener("click", () => toggleHeader());
