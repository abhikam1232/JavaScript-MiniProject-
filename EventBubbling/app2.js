let out = document.querySelector(".outer");
let mid = document.querySelector(".middle");
let inner = document.querySelector(".inner");

out.addEventListener("click", function (eve) {
    eve.stopPropagation();
    console.log("Outer box was clicked");
});

mid.addEventListener("click", function (eve) {
    eve.stopPropagation();
    console.log(" Middle box was clicked");
});

inner.addEventListener("click", function (eve) {
    eve.stopPropagation();
    console.log("Inner box was clicked");
})