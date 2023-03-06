/* JavaScripts homeworks 5 Objects */

// Напишіть функцію, яка буде перевіряти обʼєкт на пустоту

const isEmptyObject = (object) =>
  Object.keys(object).length === 0 ? `Объект пустой` : "Объект не пустой";
const myFirstObject = { name: "Maxim" };
const mySecondObject = {};
console.log(isEmptyObject(myFirstObject));
console.log(isEmptyObject(mySecondObject));

// 2. Опишіть обʼєкт user з полями name, age та методом sayHello,
// результатом виклику якого має бути повідомлення “Привіт, я name, мені age років”

const user = {
  name: "Maxim",
  age: 40,
  sayHello() {
    console.log(`Привіт, я ${this.name}, мені ${this.age} років!`);
  },
};
user.sayHello();

// 3.Напишіть обʼєкт калькулятор. Він має містити метод ask, sum та mul.
// При виклику методу ask обʼєкт має запросити 2 числа та зберегти їх, як свої властивості.
// При виклику sum - вивести суму збережених чисел, при виклику mul - додаток чисел.

const calculator = {
  firstNumber: this.firstNumber,
  secondNumber: this.secondNumber,
  ask() {
    this.firstNumber = Number(prompt("Введите первое число!"));
    this.secondNumber = Number(prompt("Введите второе число!"));
  },
  sum() {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return this.firstNumber * this.secondNumber;
  },
};
