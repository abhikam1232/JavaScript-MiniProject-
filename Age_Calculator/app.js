let btn = document.querySelector("button");
let myInput = document.querySelector("#date");

let par = document.querySelector("#paragraph");
let inputClass = document.querySelector(".input-box");
myInput.max = new Date().toISOString().split("T")[0];

function ageCalculator() {

    // Birth date
    let birthDate = new Date(myInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // Today's date
    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    // Variables
    let dateDiff, monthDiff, yearDiff;

    // Year Difference
    yearDiff = y2 - y1;

    // Month Difference
    if (m2 >= m1) {
        monthDiff = m2 - m1;
    } else {
        yearDiff--;
        monthDiff = 12 + m2 - m1;
    }

    // Date Difference
    if (d2 >= d1) {
        dateDiff = d2 - d1;
    } else {
        monthDiff--;
        let prevMonthDays = getDaysInMonth(y2, m2 - 1);
        dateDiff = prevMonthDays + d2 - d1;
    }

    // Extra correction: if month becomes negative
    if (monthDiff < 0) {
        monthDiff = 11;
        yearDiff--;
    }

    console.log("Age = ", yearDiff, monthDiff, dateDiff);
    par.innerHTML = `You are ${yearDiff} years, ${monthDiff} months and ${dateDiff} days old`;
    div.append(par);

}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

btn.addEventListener("click", ageCalculator);

p


/**let btn = document.querySelector("button");
let myInput = document.querySelector("#date");
myInput.max = new Date().toISOString().split("T")[0];

// Adding function to calculate the Age:- 
function ageCalculator() {
    // This gives access to the dates we have selected
    let birthDate = new Date(myInput.value);  // This is accessing the date we have selected 

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // This gives access to the present date:- 

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    // 3rd variable to calculate the Difference:- 
    let dateDiff, monthDiff, yearDiff;

    yearDiff = y2 - y1;

    if (m2 >= m1){
        monthDiff = m2 - m1;
    } else{
        yearDiff--;
        monthDiff = 12 + m2 - m1;
    }

    if (d2>=d1){
        yearDiff = d2 - d1;
    } else{
        monthDiff = monthDiff - 1;
        dateDiff = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (monthDiff < 0){
        monthDiff = 11;
        yearDiff--;
    }
    console.log(yearDiff, monthDiff, dateDiff);

}

function getDaysInMonth(year, month){ // This function is to get excat number of dates in that specific month
    return new Date(year, month, 0).getDate();
}

// Event listener to the button:- 
btn.addEventListener("click", function() {
    ageCalculator();
}); **/