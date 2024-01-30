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
