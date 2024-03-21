const headerMenu = document.querySelector("#header-menu");
const navbarMenu = document.querySelector("#navbar");
const header = document.querySelector(".header");
var chevdown = document.querySelector(".chevdown");
const partner = document.querySelector(".partner");
const client = document.querySelector(".client");
const partner_img = document.querySelector(".partner_img");
const client_img = document.querySelector(".client_img");
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
    } else {
        document.body.style.setProperty("overflow", style.hide);
    }
    navbarMenu.classList.toggle("open");
    headerMenu.classList.toggle("open");
}

headerMenu.addEventListener("click", () => toggleHeader());

window.onscroll = () =>{
    if(window.scrollY > 150 ){
    header.className = "header active";
   chevdown.src="/img/chevron-down.svg"
}
else{
    header.className = "header";
    chevdown.src="/img/chevdown-wht.svg"
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
        serviceDrop.style.display = "none";
    } else {
        serviceState = true;
        serviceDrop.style.display = "block";
    }
}
// Scroll window click
function check(){
    
if (serviceDrop.style.display == "block"){
    serviceDrop.style.display = "none";
}
}


serviceLink.addEventListener("click", (e) => serviceTogg(e));
window.addEventListener("scroll",  () => check());

// PORTFOLIO Slide
// partner   client    partner_img    client_img
client.addEventListener("click", function(){
    if(client.classList.contains("client")){
        client.classList.add("border");
        partner.classList.remove("border");
        partner_img.classList.remove("insert");
        client_img.classList.add("insert")
    }
})
partner.addEventListener("click", function(){
    if(partner.classList.contains("partner")){
        client.classList.remove("border");
        partner.classList.add("border");
        partner_img.classList.add("insert");
        client_img.classList.remove("insert")
    }
})