let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// Add new list item when main button is clicked
btn.addEventListener("click", function() {
    if (input.value.trim() === "") return; // prevent empty items

    // Create list item
    let item = document.createElement("li");
    item.innerText = input.value;

    // Create delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    delBtn.style.marginLeft = "50px";
    delBtn.style.fontSize = "1.2em";

    // Append delete button to list item
    item.appendChild(delBtn);
    // Append list item to ul
    ul.appendChild(item);

    // Clear input field
    input.value = "";

    // ✅ Add delete functionality immediately
    delBtn.addEventListener("click", function() {
        console.log("deleted");
        item.remove(); // actually removes the <li> from the list
    });
});
