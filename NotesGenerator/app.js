let btn = document.querySelector(".gen");
let note = document.createElement("textarea");
let main = document.querySelector(".major");

let delBtn = document.querySelector(".del")


btn.addEventListener("click", function() {
    
    note.style.width = "400px";
    note.style.height = "200px";
    note.style.margin = "auto";
    note.style.marginTop = "100px";
    note.style.borderRadius = "12px";
    note.style.fontSize = "1.4em";
    note.style.padding = "15px";
    main.append(note);
});

delBtn.addEventListener("click", function() {
    note.remove();
});

