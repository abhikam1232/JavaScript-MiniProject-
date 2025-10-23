let mainBox = document.querySelector("div");
let purpleBox = document.querySelector(".submain");
let lis = document.querySelectorAll("li");

mainBox.addEventListener("click", function (eve) {
    eve.stopPropagation();
    console.log("Main box was clicked");
});

purpleBox.addEventListener("click", function (eve) {
    eve.stopPropagation();
    console.log("Purple box was clicked");
});

