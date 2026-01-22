// Counter Part Start

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 400
    });
});

// Counter Part End
// ==================================================================================
// Class 04 - DOM = Document Object Model


let darkBtn = document.getElementById("darkBtn")
let lightBtn = document.getElementById("lightBtn")
let bothBtn = document.getElementById("bothBtn")
let green = document.getElementById("green")
let blue = document.getElementById("blue")
let red = document.getElementById("red")
let textOne = document.getElementById("textOne")
let textTwo = document.getElementById("textTwo")
let textThree = document.getElementById("textThree")

function dark() {
    document.documentElement.classList.add("dark");
}
function light() {
    document.documentElement.classList.remove("dark");
}

darkBtn.addEventListener("click", dark)
lightBtn.addEventListener("click", light)

bothBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
})
green.addEventListener("click", () => {
    textOne.style.color = "green"
})
blue.addEventListener("click", () => {
    textTwo.style.color = "blue"
})
red.addEventListener("click", () => {
    textThree.style.color = "red"
})




