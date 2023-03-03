/* JavaScripts Functions homeworks 4 */
console.log("JavaScripts Functions homeworks 4:");

let firstNumber = 23;
let secondNumber = 2;

/**
 * Функция расчёта суммы чисел. Функция проверяют чтобы тип введённых аргументов был number.
 * @param num1 <-- Первый аргумент функции, тип number.
 * @param num2 <-- Второй аргумент функции, тип number.
 * @returns {void} <-- Функция возвращает сумму переданых аргументов.
 */
function sum(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return console.log(`Сумма данных чисел равна: ${num1 + num2}`);
  }
  reportError(`Одно из значений не является числом!!!!`);
}

sum(firstNumber, secondNumber);

/**
 * Функция расчёта разницы чисел. Функция проверяют чтобы тип введённых аргументов был number.
 * @param num1 <-- Первый аргумент функции, тип number.
 * @param num2 <-- Второй аргумент функции, тип number.
 * @returns {void} <-- Функция возвращает разницу переданых аргументов.
 */
function diff(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return console.log(`Разница данных чисел: ${num1 - num2}`);
  }
  reportError(`Одно из значений не является числом!!!!`);
}

diff(firstNumber, secondNumber);

/**
 * Функция расчёта умножения чисел. Функция проверяют чтобы тип введённых аргументов был number.
 * @param num1 <-- Первый аргумент функции, тип number.
 * @param num2 <-- Второй аргумент функции, тип number.
 * @returns {void} <-- Функция возвращает результат умножения аргументов.
 */
function multi(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return console.log(`Результат умножения данных чисел: ${num1 * num2}`);
  }
  reportError(`Одно из значений не является числом!!!!`);
}

multi(firstNumber, secondNumber);

/**
 * Функция расчёта деления чисел. Функция проверяют чтобы тип введённых аргументов был number.
 * В случае если кторой аргумент будет равен 0, будет получена ошибка, так как на 0 делить нельзя.
 * @param num1 <-- Первый аргумент функции, тип number.
 * @param num2 <-- Второй аргумент функции, тип number.
 * @returns {void} <-- Функция возвращает результат деления аргументов.
 */
function division(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num2 === 0) {
      reportError(`На ноль делить нельзя, введите новое число!`);
    }
    return console.log(`Результат деления данных чисел: ${num1 / num2}`);
  }
  reportError(`Одно из значений не является числом!!!!`);
}

division(firstNumber, secondNumber);

/*  Max & min numbers in array */

let testArray = [
  5,
  true,
  64,
  "Maxim",
  8,
  11,
  32,
  false,
  32,
  19,
  2,
  "string",
  28,
];

// Наш массив
console.log("Массив с произвольными числами: ", testArray);

let maxNumberInTestArray = -Infinity;
let minNumberInTestArray = Infinity;

/**
 * Функция ищет максимальное число в массиве
 * @param array <-- Аргументом данной функции обязательно должен быть массив!
 */
function maxNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] > maxNumberInTestArray) {
        maxNumberInTestArray = array[i];
      }
    }
  }
  return console.log(
    `Максимальное число в данном массиве: ${maxNumberInTestArray}`
  );
}

maxNumber(testArray);

/**
 * Функция ищет минимальное число в массиве
 * @param array <-- Аргументом данной функции обязательно должен быть массив!
 */
function minNumber(array) {
  for (let element of array) {
    if (typeof element === "number") {
      if (element < minNumberInTestArray) {
        minNumberInTestArray = element;
      }
    }
  }
  return console.log(
    `Минимальное число в данном массиве: ${minNumberInTestArray}`
  );
}

minNumber(testArray);
