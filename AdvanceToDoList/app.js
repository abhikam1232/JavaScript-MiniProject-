let input = document.querySelector("#input"); // Now I have Accessed the Input 
let btn = document.querySelector(".ad"); // Now I have here Accessed the btn 
let ul = document.querySelector("#list-container"); // Now we have accessed the unordered list here 

btn.addEventListener("click", function() {
    if (input.value.trim() === "") return;
    
    
    // Creating the items of the Lists.. 
    let item = document.createElement("li");
    ul.appendChild(item);  // Here we have appended that specific item in the list 
    ul.style.marginTop = "20px";

    // Changing the styling
    item.innerText = input.value;
    item.style.color = "#333333";
    item.style.fontSize = "1.4em";
    item.style.fontWeight = "bold";
    item.style.fontFamily = "Poppins";
    item.style.margin = "10px";

    // Now we will create a delete button in this section:- 
    let delButton = document.createElement("button");
    delButton.innerText = "Remove";
    delButton.style.marginLeft = "20px";
    delButton.style.fontSize = "1em";
    delButton.style.backgroundColor = "#ff5945";
    delButton.style.color = "white";
    delButton.style.borderRadius = "20px";
    delButton.style.border = "none";
    delButton.style.paddingRight = "10px";
    delButton.style.paddingLeft = "10px";

    // Adding class lists:- 
    delButton.classList.add("delete");



    // Appending the del button:- 
    item.appendChild(delButton);

    // Clear input field:- 
    input.value = "";

    // Now implementing the del button functionality:- 
    delButton.addEventListener("click", function() {
        console.log(" Delete has been Activated");
        item.remove();

    });

});
