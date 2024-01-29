const headerMenu = document.querySelector("#header-menu");
const navbarMenu = document.querySelector("#navbar");
const header = document.querySelector("#header");
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

// window.onscroll = () =>{
//     if(window.scrollY > 150){
//     header.className = "header active";
   
// }
// else{
//     header.className = "header";
  
// }
// console.log(window.scrollY)
// }  



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
        serviceDrop.style.display = "none";
    } else {
        serviceState = true;
        serviceDrop.style.display = "block";
    }
}