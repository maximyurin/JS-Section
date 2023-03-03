/* JavaScripts cycles and arrays homeworks 3 */
console.log("JavaScripts cycles and arrays homeworks 3:");

let myArray = [3, 70, 5, true, 43, 23, 21, 10, "hello", 8, 52];

// Наш массив
console.log("Массив с произвольными числами: ", myArray);

// Скрипт для поиска суммы чисел массива

let sumOfArrayNumbers = 0;

for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] == "number") {
    sumOfArrayNumbers = sumOfArrayNumbers + myArray[i];
  }
}

console.log(`Сумма элементов массива: ${sumOfArrayNumbers}`);

// Скрипт для поиска максимального и минимального числа массива

let maxNumberInArray = -Infinity;
let minNumberInArray = Infinity;

for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "number") {
    if (myArray[i] > maxNumberInArray) {
      maxNumberInArray = myArray[i];
    }
    if (myArray[i] < minNumberInArray) {
      minNumberInArray = myArray[i];
    }
  }
}

console.log(`Максимальное число в данном массиве: ${maxNumberInArray}`);
console.log(`Минимальное число в данном массиве: ${minNumberInArray}`);

// Скрипт для вывода ёлочки

for (let i = 1; i <= 5; i++) {
  let tree = "";
  for (let a = 1; a <= i; a++) {
    tree += "#";
  }
  console.log(tree);
}
