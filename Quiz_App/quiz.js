let startBtn = document.querySelector(".startBtn");
let secondSection = document.querySelector("#second");

startBtn.addEventListener("click", function() {
    secondSection.scrollIntoView({ behavior: "smooth"});
    secondSection.style.transition = "transform 1sec";
});