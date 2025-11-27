let startBtn = document.querySelector(".startBtn");
let secondSection = document.querySelector("#second");
let output = document.querySelector(".output");
let clickBtn = document.querySelector("#new"); // This is the click button... 
let h3 = document.querySelector("h3");
let input = document.querySelector(".answer");
let submitBtn = document.querySelector("#submit");
let paragraph = document.querySelector(".newPar");

startBtn.addEventListener("click", function () {
    secondSection.scrollIntoView({ behavior: "smooth" });
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
h3.appendChild(par);
par.style.color = "white";
par.classList.add("parClass");
par.style.color = "white";
par.style.textAlign = "center";
par.style.marginTop = "30px";





// This is my method which is implemented :- 
let index = 0;

clickBtn.addEventListener("click", function () {
    if (index < simpleQues.length) {
        par.innerText = simpleQues[index];
        index = index + 1;
    } else {
        par.innerText = " ✨ No more Questions are here ✨"
    }

    input.style.visibility = "visible"; // styling for input 
    input.style.width = "200px";
    input.style.margin = "auto";
    input.style.height = "25px";
    input.style.padding = "10px";

});


let score = 1;


submitBtn.addEventListener("click", function () {
    let myAnswer = input.value;
    input.value = "";

    if (simpleAns.includes(myAnswer)) {
        paragraph.innerText = (`You Scored ${score} point`);
        score = score + 1;
    } else {
        paragraph.innerText = "You are Wrong";
    }

    paragraph.style.margin = "auto";


    // This is to go one the next ques simultaneously..

    
        if (index < simpleQues.length) {
            par.innerText = simpleQues[index];
            index = index + 1;
        } else {
            par.innerText = " ✨ No more Questions are here ✨"
        }
    



});


