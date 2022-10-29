const primaryNav = document.querySelector(".primary-nav");
const navtoggle = document.querySelector(".navTougleIcon");

const fullnav = document.querySelector("nav");


navtoggle.addEventListener("click",()=>{
    const visibility = primaryNav.getAttribute("data-visible");

    console.log(!visibility);

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible","true");


        navtoggle.classList.remove('lni-menu');
        navtoggle.classList.add('lni-close');


    } else {
        primaryNav.setAttribute("data-visible","false");
        navtoggle.classList.remove('lni-close');
        navtoggle.classList.add('lni-menu');
    }

})


window.addEventListener("scroll",()=>{
    fullnav.classList.toggle("sticky", window.scrollY > 100);
    primaryNav.classList.toggle("sticky", window.scrollY > 100);
})