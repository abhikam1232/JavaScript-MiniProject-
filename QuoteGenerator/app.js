let btn = document.querySelector("button");
let par = document.querySelector("p");

const quotes = [
  "Dream big, work hard.",
  "Stay humble, hustle daily.",
  "Believe in your vision.",
  "Make today count always.",
  "Create your own sunshine.",
  "Push limits, chase greatness.",
  "Success loves bold moves.",
  "Discipline builds lasting strength.",
  "Focus, grind, never quit.",
  "Small steps create success."
];

// Using array event lustener method 
 /** btn.addEventListener("click", function() {
    let val = Math.floor(Math.random() * quotes.length); // var which generates random number having limit of the array which is 1-10..
    par.innerText = quotes[val];
    par.style.marginBottom = "50px";
    par.style.fomtFamily = "cursive";
}); **/


// using API method:- 
 btn.addEventListener("click", function(){ // Event listener.. 
    Advance();
});

async function Advance(){
    let data = await fetch("https://api.kanye.rest/");
    let jsonAccess = await data.json(); // Converts in json 
    par.innerText = jsonAccess["quote"];
} 

