let startBtn = document.querySelector(".startBtn");
let secondSection = document.querySelector("#second");
let output = document.querySelector(".output");

startBtn.addEventListener("click", function() {
    secondSection.scrollIntoView({ behavior: "smooth"});
    secondSection.style.transition = "transform 1sec";
});

const simpleQues = [
    "What is the color of the sky on a clear day?",
    "How many days are there in a week?",
    "What do humans breathe in?",
    "What is the opposite of hot?",
    "What planet do we live on?"
];

const simpleAns = [
    "blue", "seven", "air", "cold", "earth",
];

// Now I basically Want to make an function using which it will automatically display one question and in the input we need to type that answer if that answer is right it will check from the answers array and say it is right... 

let par = document.createElement("p");
output.appendChild(par);
let clickBtn = document.querySelector("#new");


// This is my method which is implemented :- 
 /** clickBtn.addEventListener("click", function() {
    for(i=0; i<=4; i++){
    par.innerText = simpleQues[i];
    par.style.color = "white";
    console.log("helloo");
} 
}); **/
