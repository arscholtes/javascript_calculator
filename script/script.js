// function updateOutput(clicked) {
//   document.querySelector('.output').textContent += clicked;
// }
// var output = "0";
//
// function convertOutput() {
//   document.querySelector('.output').textContent = output;
// }


var mathStore= "0";

function clickNumber(clicked) {
  if (document.querySelector(".output"). textContent === "0"){
    document.querySelector(".output").textContent = "";
    document.querySelector(".output").textContent += clicked;
    nathStore += document.querySelector(".output").textContent;
    console.log(mathStore;
  } else {
    document.querySelector(".output").textContent;
    console.log(mathStore);
  }
};

var mathStore= "0";
function clickMathy(clicked) {

  mathStore = document.querySelector(".output").textContent + mClicked;
  document.querySelector(".output").textContent = (mathStore);
  console.log(mathStore);
}

function clickEquals(eClicked) {
  mathStore = document.querySelector(".output").textContent;
  console.log(mathStore);
  document.querySelector(".output").textContent = eval(mathStore);
  console.log(mathStore);
}

fuction clickClear(cClicked) {
  mathStore = "0";
  document.querySelector(".output").textContent = mathStore;
}
