let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";


    // This part is for creating a del button..
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    ul.appendChild(delBtn);
    delBtn.style.marginLeft = "50px";
    delBtn.style.fontSize = "1.2em";

    delBtn.classList.add("del");

});



