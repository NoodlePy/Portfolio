const tone = document.getElementById("tone")
const ttwo = document.getElementById("ttwo")
const tthree = document.getElementById("tthree")
const tfour = document.getElementById("tfour")
const surround = document.getElementById("surround")
const slider = document.getElementById("slider")



window.onload = function() {
    console.log("Starting...")
    tone.classList.add("fade")
    setTimeout(() => {
        ttwo.classList.add("fade")
    }, 2000);
    setTimeout(() => {
        tthree.classList.add("fade")
    }, 4500);
    setTimeout(() => {
        tfour.classList.add("fade")
    }, 7000);
    setTimeout(() => {
        slider.classList.add("fadeOut")
    }, 9000);
    setTimeout(() => {
        slider.innerHTML = ""
    }, 11000);
}