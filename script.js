const headerMenu = document.querySelector("#header-menu");
const navbarMenu = document.querySelector("#navbar");
const header = document.querySelector(".header");
var chevdown = document.querySelector(".chevdown");
var chevron = document.querySelector(".chevron");
const partner = document.querySelector(".partner");
const client = document.querySelector(".client");
const erp = document.querySelector(".erp");
const branding = document.querySelector(".branding");
const partner_img = document.querySelector(".partner_img");
const client_img = document.querySelector(".client_img");
const erp_img = document.querySelector(".erp_img");
const branding_img = document.querySelector(".branding_img");
const mobile_menu = document.querySelector(".mobile_menu");
const home_info = document.querySelector(".home_info");


// const partner = document.querySelector(".partner");
// const partner = document.querySelector(".partner");


const style = {
    hide: "hidden",
    show: "auto"
}

// Navbar
const toggleHeader = () => {
    if (navbarMenu.classList.contains("open")) {
        document.body.style.setProperty("overflow", style.show);
        // check
        // home_info.style.visibility = "visible"; 
        // home_info.style.position = "relative"
    } else {
        document.body.style.setProperty("overflow", style.hide);
        // check
        // home_info.style.visibility = "hidden";
        // home_info.style.position = "initial"
        

    }
    navbarMenu.classList.toggle("open");
    headerMenu.classList.toggle("open");
}

headerMenu.addEventListener("click", () => toggleHeader());

window.onscroll = () => {
    if (window.scrollY > 150) {
        header.className = "header active";
        chevdown.src = "/img/chevron-down.svg"
        serviceState = false
    }
    else {
        header.className = "header";
        chevdown.src = "/img/chevdown-wht.svg"
    }
    console.log(window.scrollY)
}


const serviceEvent = {
    show: "mouseenter",
    hide: "mouseleave"
}
const serviceLink = document.querySelector(".service-link");
const serviceDrop = document.querySelector(".service-drop");

let serviceState;
function serviceTogg(e) {
    if (serviceState === true) {
        serviceState = false;
        serviceDrop.style.visibility = "hidden";
        serviceDrop.style.transform = "translatey(-30px)";
        chevron.src = "img/chevron-down.svg";
        mobile_menu.className = "mobile_menu"
    } else {
        serviceState = true;
        serviceDrop.style.visibility = "visible";
        serviceDrop.style.transform = "translatey(0)";
        chevron.src = "img/chevron-up.svg"
        mobile_menu.className = "mobile_menu mobile_menu_active"
    }
}
// Scroll window click
function check() {

    if (serviceDrop.style.visibility == "visible") 
    {
        serviceDrop.style.visibility = "hidden";
        chevron.src = "img/chevron-down.svg"
        serviceState = false
    }
}


serviceLink.addEventListener("click", (e) => serviceTogg(e));
window.addEventListener("scroll", () => check());

// PORTFOLIO Slide
// partner   client    partner_img    client_img

client.addEventListener("click", function () {
    if (client.classList.contains("client")) {
        client.classList.add("border");
        partner.classList.remove("border");
        erp.classList.remove("border");
        partner_img.classList.remove("insert");
        erp_img.classList.remove("insert");
        client_img.classList.add("insert")
    }
})
partner.addEventListener("click", function () {
    if (partner.classList.contains("partner")) {
        partner.classList.add("border");
        client.classList.remove("border");
        erp.classList.remove("border");
        partner_img.classList.add("insert");
        client_img.classList.remove("insert");
        erp_img.classList.remove("insert")
    }
})

erp.addEventListener("click", function () {
    if (erp.classList.contains("erp")) {
        erp.classList.add("border");
        client.classList.remove("border");
        partner.classList.remove("border");
        erp_img.classList.add("insert");
        client_img.classList.remove("insert")
        partner_img.classList.remove("insert")
    }
})