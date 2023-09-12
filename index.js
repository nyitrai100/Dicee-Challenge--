// let firstImgElements = document.querySelectorAll(".img1");
// let secondImgElements = document.querySelectorAll(".img2");
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
// var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
// let imgRandom1 = "./images/dice" + randomNumber1 + ".png";
// let imgRandom2 = "./images/dice" + randomNumber2 + ".png";

// firstImgElements.forEach(function(firstImgElements){
//     firstImgElements.setAttribute("src", imgRandom1);
// })

// secondImgElements.forEach(function(secondImgElements){
//     secondImgElements.setAttribute("src", imgRandom2)
// })



// Select all elements with class "img1" and "img2"
let firstImgElements = document.getElementsByClassName("img1");
let secondImgElements = document.getElementsByClassName("img2");

// Generate random numbers between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Construct random image filenames
let imgRandom1 = "./images/dice" + randomNumber1 + ".png";
let imgRandom2 = "./images/dice" + randomNumber2 + ".png";

// Loop through the elements with class "img1" and set their src attribute
for (let i = 0; i < firstImgElements.length; i++) {
  firstImgElements[i].setAttribute("src", imgRandom1);
}

// Loop through the elements with class "img2" and set their src attribute
for (let i = 0; i < secondImgElements.length; i++) {
  secondImgElements[i].setAttribute("src", imgRandom2);
}
