const mobile_nav=document.querySelector(".mobile-nav-btn");
const header=document.querySelector(".header");

const toggleNavbar=()=>{
    header.classList.toggle("active");
}
mobile_nav.addEventListener("click",toggleNavbar);