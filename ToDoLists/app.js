let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    console.info(input.value);
    input.value = "";
});