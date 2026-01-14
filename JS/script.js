// Counter Part Start

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 400
    });
});

// Counter Part End
// ==================================================================================
// Class 01 Start.

let intro = ("Times Table of 9")

console.log(intro);

let a = (9)

console.log(a + " " + "X" + " " + 1 + " " + "=" + " " + a * 1)
console.log(a + " " + "X" + " " + 2 + " " + "=" + " " + a * 2)
console.log(a + " " + "X" + " " + 3 + " " + "=" + " " + a * 3)
console.log(a + " " + "X" + " " + 4 + " " + "=" + " " + a * 4)
console.log(a + " " + "X" + " " + 5 + " " + "=" + " " + a * 5)
console.log(a + " " + "X" + " " + 6 + " " + "=" + " " + a * 6)
console.log(a + " " + "X" + " " + 7 + " " + "=" + " " + a * 7)
console.log(a + " " + "X" + " " + 8 + " " + "=" + " " + a * 8)
console.log(a + " " + "X" + " " + 9 + " " + "=" + " " + a * 9)
console.log(a + " " + "X" + " " + 10 + " " + "=" + " " + a * 10)

let circle = ("If radius of a cirle is 'r=5' then, area of a circle....")
console.log(circle)

const pi = ("3.1415926535")
const r = 5

console.log("pi.r²" + " " + "=" + " " + pi * r * r)

// Class 01 end.
// ==================================================================================
// Class 02 Start.

// Suppose Input Start.
let marks = 900;
// Suppose Input End.

if (marks < 0 || marks > 100) {
    console.log("Error! Unindentified Marks....");
}
else if (marks >= 33 && marks <= 39) {
    console.log("Grade D");
}
else if (marks >= 40 && marks <= 49) {
    console.log('Grade C')
}
else if (marks >= 50 && marks <= 59) {
    console.log('Grade B')
}
else if (marks >= 60 && marks <= 69) {
    console.log('Grade A-')
}
else if (marks >= 70 && marks <= 79) {
    console.log('Grade A')
}
else if (marks >= 80 && marks <= 100) {
    console.log('Grade A+')
}
else {
    console.log("FAIL");
}

// Class 02 End.
// ==================================================================================
// Class 03 Start.

// Forloop
for (let i = 1; i < 11; i++) {
    console.log(`${a} X ${i} = ${a * i}`);
}
// Forloop

// ` ` Sign is Called Backtic / Tilda

// Object
let object = {
    name: "Sifat",
    age: 300,
    place: "Dhanmondi"
}
console.log(object);
console.log(object.age);
// Object

// Array
let array = [
    "HELLO", 100, true , false, "WORLD"
]
console.log(array);
console.log(array[4]);
// Array

let groupLeaders = {
    art: {
        name: "Rifat",
        Age: 120
    },
    music: {
        name: "Nihal",
        Age: 111
    },
    sport: {
        name: "Mir",
        Age: 132
    }
}
console.log(groupLeaders);

// Function
function energy(){
    let m = 60;
    let c = 300000
    let e = m*c*c;
    console.log(e);
}
console.log(energy);
energy()
energy()
// Function

// Class 03 End.
// ==================================================================================