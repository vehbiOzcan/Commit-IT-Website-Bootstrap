var navContainer = document.getElementById("nav-container");
var hbMenu = document.getElementById("hb-menu");
var menuItems = document.getElementById("menu-item");
var barsIcon = document.getElementById("bars-icon");
var nav = document.getElementById("nav");
let hidden = false;

let swidth = window.innerWidth;

if (swidth <= 986) {
    hbMenu.classList.replace("visually-hidden", "visible");
}

const getHash = () => window.location.hash || '#home';
const hashActive = () => {
    [...document.querySelectorAll('a.nav-link')]
    .map(link => {
        link.classList.remove('active')
        return link;
    })
    .find(link => link.hash == getHash())
    .classList.add('active');
}

window.addEventListener("hashchange",hashActive);
hashActive();

window.addEventListener("scroll", function(){
    var navEnd = nav.getBoundingClientRect().top;
    console.log(navContainer.getBoundingClientRect())
    if(navEnd < 0){
        navContainer.classList.add("position-fixed");
    } else {
        navContainer.classList.remove("position-fixed")
    }
})

window.addEventListener("resize", function () {
    var width = navContainer.offsetWidth;

    if (width <= 986) {
        menuItems.classList.add("visually-hidden");
        hidden = true;
        hbMenu.classList.replace("visually-hidden", "visible")
    } else {
        menuItems.classList.remove("visually-hidden");
        hidden = false;
        hbMenu.classList.replace("visible", "visually-hidden")
    }
})

hbMenu.addEventListener("click", function () {
    hidden ? menuItems.classList.remove("visually-hidden") : menuItems.classList.add("visually-hidden");
    hidden = !hidden;
})
