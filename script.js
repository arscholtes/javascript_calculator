var mathStore = [];
var numStore = "";

function number(clicked) {
  if (document.querySelector('.output').textContent === "0") {  //Add the corresponding number of the button to numStore
    document.querySelector('.output').textContent = "";
    document.querySelector('.output').textContent += clicked;
    numStore += clicked;
    // console.log(numStore);
  } else {
    document.querySelector('.output').textContent += clicked;
    numStore += clicked;
    // console.log(numStore);
  }
};

function operator(mClicked) { // Group numbers with eachother if they are not separated by an operator
  if (mClicked == "√") {
    mathStore.push(mClicked);
    numStore = "";
    document.querySelector('.output').textContent += mClicked;
    // console.log(mathStore);
  } else {
    mathStore.push(numStore);
    mathStore.push(mClicked);
    numStore = "";
    document.querySelector('.output').textContent += mClicked;
    // console.log(mathStore);
  }
}

function equal(eClicked) { // Create a new variable 'temp', and split up groupings of numbers that are between the operators
  mathStore.push(numStore);
  // console.log(mathStore);
  let temp = 0;
  for (idx = 0; idx < mathStore.length; idx++) {
    if (mathStore[idx] == "") {
      temp = Math.sqrt(mathStore[idx + 1]);
      // console.log(temp);
      mathStore.splice([idx], 2, temp);
      // console.log(mathStore);
    }
  }

  for (idx = 0; idx < mathStore.length; idx++) { // dealing with remainders
    if (mathStore[idx] == "%") {
      temp = mathStore[idx - 1] % mathStore[idx + 1];
      mathStore.splice([idx - 1], 3, temp);
      console.log(mathStore);
    }
  }


  for (idx = 0; idx < mathStore.length; idx++) { // dealing with multiplication
    if (mathStore[idx] == "*") {
      temp = mathStore[idx - 1] * mathStore[idx + 1];
      mathStore.splice([idx - 1], 3, temp);
      // console.log(mathStore);
    }
  }


  for (idx = 0; idx < mathStore.length; idx++) { // dealing with division
    if (mathStore[idx] == "/") {
      temp = mathStore[idx - 1] / mathStore[idx + 1];
      mathStore.splice([idx - 1], 3, temp);
      // console.log(mathStore);

    }
  }
  for (idx = 0; idx < mathStore.length; idx++) { // dealing with addition
    if (mathStore[idx] == "+") {
      temp = Number(mathStore[idx - 1]) + Number(mathStore[idx + 1]);
      mathStore.splice([idx - 1], 3, temp);
      // console.log(mathStore);

    }
  }
  for (idx = 0; idx < mathStore.length; idx++) { // dealing with subtraction
    if (mathStore[idx] == "-") {
      temp = mathStore[idx - 1] - mathStore[idx + 1];
      mathStore.splice([idx - 1], 3, temp);
      // console.log(mathStore);

    }
  }
  document.querySelector('.output').textContent = mathStore; // print the result of the equation to the textbox
}

function clear(cClicked) { // should be clearing the textbox
  mathStore = [];
  numStore = "";
  document.querySelector('.output').textContent = mathStore;
}
