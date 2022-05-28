// hamburger menu

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

function clickHamburger() {
    hamburger.style.animation = "rollOut 250ms forwards ease-in";
    setTimeout(function () {
        hamburger.style.display = "none";
        close.style.display = "block";
        close.style.animation = "rollIn 500ms forwards ease-out"
    },250);
}

hamburger.addEventListener("click", clickHamburger);

function clickClose() {
    close.style.animation = "rollOut 250ms forwards ease-in";
    setTimeout(function () {
        close.style.display = "none";
        hamburger.style.display = "block";
        hamburger.style.animation = "rollIn 500ms forwards ease-out"
    },250);
}

close.addEventListener("click", clickClose);

//dropdown

const dropDownMenu = document.querySelector(".dropdown-menu");
const dropDownMenuItem = document.querySelectorAll(".dropdown-menu ul li");

function dropDown() {
    dropDownMenu.style.top = "0";
}

hamburger.addEventListener("click", dropDown);

function pullUp() {
    dropDownMenu.style.top = "-20rem";
}

close.addEventListener("click", pullUp);

dropDownMenuItem[0].addEventListener("click", () => {
    pullUp();
    clickClose();
});
dropDownMenuItem[1].addEventListener("click", () => {
    pullUp();
    clickClose();
});
dropDownMenuItem[2].addEventListener("click", () => {
    pullUp();
    clickClose();
});
dropDownMenuItem[3].addEventListener("click", () => {
    pullUp();
    clickClose();
});



// more info about projects when clicking on them

const viewProjects = document.querySelectorAll(".more");
const gleb = document.querySelector(".gleb");
const keys = document.querySelector(".keys");

const darkOverlay = document.querySelector(".dark-overlay");
const exitButton = document.querySelectorAll("#exit")

console.log(projects);

function showProjectGleb() {
   viewProjects[0].style.display = "block";
   darkOverlay.style.display = "block";
}
function showProjectKeys() {
    viewProjects[1].style.display = "block";
    darkOverlay.style.display = "block";
}

gleb.addEventListener("click", showProjectGleb);
keys.addEventListener("click", showProjectKeys);

function closeProjects() {
    viewProjects[0].style.display = "";
    viewProjects[1].style.display = "";
    darkOverlay.style.display = "";
}

exitButton[0].addEventListener("click", closeProjects);
exitButton[1].addEventListener("click", closeProjects);


// see my art button

document.querySelector(".art-btn").addEventListener("mouseenter", function(){
    document.querySelector(".art-btn span").style.paddingLeft = "1rem";
    document.querySelector(".art-btn span").style.paddingRight = "0";
});

document.querySelector(".art-btn").addEventListener("mouseleave", function(){
    document.querySelector(".art-btn span").style.paddingLeft = "";
    document.querySelector(".art-btn span").style.paddingRight = "";
});