// First solution starts

let firstImgElements = document.querySelectorAll("img")[0];
let secondImgElements = document.querySelectorAll("img")[1];
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
let imgRandom1 = "./images/dice" + randomNumber1 + ".png";
let imgRandom2 = "./images/dice" + randomNumber2 + ".png";
changeH1();
firstImgElements.setAttribute("src", imgRandom1);
secondImgElements.setAttribute("src", imgRandom2)

// First solution end


// second solution starts
// // Select all elements with class "img1" and "img2"
// let firstImgElements = document.getElementsByClassName("img1");
// let secondImgElements = document.getElementsByClassName("img2");

// // Generate random numbers between 1 and 6
// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// changeH1();
// // Construct random image filenames
// let imgRandom1 = "./images/dice" + randomNumber1 + ".png";
// let imgRandom2 = "./images/dice" + randomNumber2 + ".png";

// // Loop through the elements with class "img1" and set their src attribute
// for (let i = 0; i < firstImgElements.length; i++) {
//   firstImgElements[i].setAttribute("src", imgRandom1);
// }

// // Loop through the elements with class "img2" and set their src attribute
// for (let i = 0; i < secondImgElements.length; i++) {
//   secondImgElements[i].setAttribute("src", imgRandom2);
// }

// second solution end




function changeH1 (){
    const refreshMe = document.querySelector("h1");
    
    if(randomNumber1 > randomNumber2){
        
        refreshMe.innerHTML = "Player 1 Wins";
    }
    else if(randomNumber2 > randomNumber1){
        refreshMe.innerHTML = "Player 2 Wins";
    }
    else {
        
        refreshMe.innerHTML = "Draw";
    }
  
};


