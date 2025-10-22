console.log("theMessage");

// value of const variable will not change
//// this line passes the body element into the variable theBody
const theBody = document.querySelector('body');
//// this line passes the main element into the variable theMain
let theMain = document.querySelector('main')
// let value changes
let theButton = document.querySelector("button");
theButton.style.border = "10px solid black";

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
theButton.addEventListener("click", theyClicked);

function theyClicked(){
    console.log("clicked!");
    theMain.style.backgroundColor = "pink";    
}