/* JavaScripts homework 7. DOM */

let firstNumber = Number(prompt("Введите первое число"));
let secondNumber = Number(prompt("Введите второе число"));
let testArray = [
  5,
  true,
  64,
  "Maxim",
  8,
  -11,
  32,
  false,
  32,
  19,
  2,
  "string",
  28,
  71,
  22,
];
const container = document.querySelector(".results");
container.insertAdjacentHTML(
  "beforeend",
  `<div class="first-number"><h2>Первое число: <span style="color: ${
    firstNumber < 0 ? "red" : "green"
  }">${firstNumber}</span></h2></div>`
);
container.insertAdjacentHTML(
  "beforeend",
  `<div class="second-number"><h2>Второе число: <span style="color: ${
    secondNumber < 0 ? "red" : "green"
  }">${secondNumber}</span></h2></div>`
);

function sum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = num1 + num2;
    let resultColor = result < 0 ? "red" : "green";
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-sum"><h2>Сумма чисел: <span style="color: ${resultColor}">${result}</span></h2></div>`
    );
  }
}

sum(firstNumber, secondNumber);

function diff(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = num1 - num2;
    let resultColor = result < 0 ? "red" : "green";
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-diff"><h2>Разница чисел: <span style="color: ${resultColor}">${result}</span></h2></div>`
    );
  }
}

diff(firstNumber, secondNumber);

function multi(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = num1 * num2;
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-multi"><h2>Произведение чисел: ${result}</h2></div>`
    );
  }
}

multi(firstNumber, secondNumber);

function division(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-div"><h2 style="color: red;">Ошибка. На 0 делить нельзя</h2></div>`
    );
  }
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = (num1 / num2).toFixed(2);
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-div"><h2>Результат деления чисел: ${result}</h2></div>`
    );
  }
}

division(firstNumber, secondNumber);

/*  Max & min numbers in array */

container.insertAdjacentHTML(
  "beforeend",
  `<div class="array"><h2>Вводный массив: </h2><h3>[${testArray}]</h3></div>`
);

let maxNumberInTestArray = -Infinity;
let minNumberInTestArray = Infinity;

function maxNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] > maxNumberInTestArray) {
        maxNumberInTestArray = array[i];
      }
    }
  }
  return container.insertAdjacentHTML(
    "beforeend",
    `<div class="result-of-max-number"><h2>Максимальное число в массиве: <span style="color: ${
      maxNumberInTestArray < 0 ? "red" : "green"
    };">${maxNumberInTestArray}</span></h2></div>`
  );
}

maxNumber(testArray);

function minNumber(array) {
  for (let element of array) {
    if (typeof element === "number") {
      if (element < minNumberInTestArray) {
        minNumberInTestArray = element;
      }
    }
  }
  return container.insertAdjacentHTML(
    "beforeend",
    `<div class="result-of-min-number"><h2>Минимальное число в массиве: <span style="color: ${
      minNumberInTestArray < 0 ? "red" : "green"
    };">${minNumberInTestArray}</span></h2></div>`
  );
}

minNumber(testArray);
