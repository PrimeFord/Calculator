//Query selector
const number = document.querySelectorAll(".number");
const result = document.querySelector(".result span");
const sign = document.querySelectorAll(".sign");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const pos_neg = document.querySelector(".pos_neg");
const percent = document.querySelector(".percent");

//
let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let signs = "";
let resultValue = 0;

//
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => {
    let atr = e.target.getAttribute("value");
    if (isFirstValue === false) {
      getFirstValue(atr);
    }
    if (isSecondValue == false) {
      getSecondValue(atr);
    }
  });
}

//
function getFirstValue(el) {
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
  firstValue = +firstValue;
}

function getSecondValue(el) {
  if (firstValue != "" && signs != "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}

function getSign() {
  for (let i = 0; i < sign.length; i++) {
    sign[i].addEventListener("click", (e) => {
      signs = e.target.getAttribute("value");
      console.log(signs);
      isFirstValue = true;
    });
  }
}
getSign();

equal.addEventListener("click", () => {
  result.innerHTML = "";
  if (signs === "+") {
    resultValue = firstValue + secondValue;
  } else if (signs === "-") {
    resultValue = firstValue - secondValue;
  } else if (signs === "x") {
    resultValue = firstValue * secondValue;
  } else if (signs === "/") {
    resultValue = firstValue / secondValue;
  }
  result.innerHTML = resultValue;
  firstValue = resultValue;
  secondValue = "";
});

function checkResultLength() {
  resultValue = JSON.stringify(resultValue);
  if (resultValue.length >= 8) {
    resultValue = JSON.parse(resultValue);
    result.innerHTML = resultValue.toFixed(5);
  }
}

pos_neg.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue != "") {
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  if (firstValue != "" && secondValue != "" && signs != "") {
    resultValue = -resultValue;
  }
  result.innerHTML = resultValue;
});

percent.addEventListener("click", () => {
  result.innerHTML = "";
  if (firstValue != "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  if (firstValue != "" && secondValue != "" && signs != "") {
    resultValue = resultValue / 100;
  }
  result.innerHTML = resultValue;
});

clear.addEventListener("click", () => {
  result.innerHTML = 0;

  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = false;
  signs = "";
  resultValue = 0;
});
