/* JavaScripts homeworks 12 */

// 1. Реалізувати метод .pow(n) для масиву при виклику, якого всі елементи масиву мають бути піднесенні до степеню n.

// Вариант 1

Array.prototype.pow = function (n) {
  return this.map((x) => Math.pow(x, n));
};

// Вариант 2

// Array.prototype.pow = function (n) {
//   const resultArray = [];
//   for (let i = 0; i < this.length; i++) {
//     const currentNumberInDegree = Math.pow(this[i], n);
//     resultArray.push(currentNumberInDegree);
//   }
//   return resultArray;
// };

const myArr = [1, 2, 3].pow(2);
console.log(myArr);

// 2. Додати до функції метод defer(n), який має виконати тіло функції через n мілісекунд

function a() {
  console.log("test");
  // alert(“test”)
}

a.defer = function (n) {
  setTimeout(() => {
    a();
  }, n);
};

a();
a.defer(3000);
