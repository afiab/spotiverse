var r = document.querySelector(':root');


var black =document.getElementById("black");
black.addEventListener("click",changeBlack);
var white =document.getElementById("white");
white.addEventListener("click",changeWhite);
var primary =document.getElementById("primary");
primary.addEventListener("click",changePrimary);
var secondary =document.getElementById("secondary");
secondary.addEventListener("click",changeSecondary);
var primShade =document.getElementById("primShade");
primShade.addEventListener("click",changePrimeShade);
var secShade =document.getElementById("secShade");
secShade.addEventListener("click",changeSecShade);

function changeBlack(){
    r.documentElement.style.setProperty('--black', document.getElementById("blackEvent"));
}

function changeWhite(){
    r.documentElement.style.setProperty('--white', document.getElementById("whiteEvent"));
}

function changePrimary(){
    r.documentElement.style.setProperty('--primary', document.getElementById("primaryEvent"));
}

function changeSecondary(){
    r.documentElement.style.setProperty('--secondary', document.getElementById("secondaryEvent"));
}

function changePrimeShade(){
    r.documentElement.style.setProperty('--primShade', document.getElementById("primShadeEvent"));
}

function changeSecShade(){
    r.documentElement.style.setProperty('--secondShate', document.getElementById("secShadeEvent"));
}