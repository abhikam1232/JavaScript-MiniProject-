let mainBtn = document.querySelector(".myBtn");
let pop = document.querySelector(".popup");
let delBtn = document.querySelector(".insideBtn");

mainBtn.addEventListener("click", function() {
    pop.style.visibility = "visible";
    pop.style.transform = "translate(-50%, -50%)";
    pop.style.transform = "scale(1)";

});

delBtn.addEventListener("click", function() {
    pop.style.visibility = "hidden";

});

