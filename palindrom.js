document.getElementsByClassName("cube")[0].style =
  "width: 100px; height: 100px; background-color: green";

let testEl = document.getElementsByClassName("cube")[0];
let bgcolor = document.getElementsByClassName("cube")[0].style.backgroundColor;

function myFunction() {
  console.log(bgcolor);
  if (bgcolor === "green") {
    bgcolor = "red";
  } else {
    bgcolor = "green";
  }
  testEl.style.backgroundColor = bgcolor;
}