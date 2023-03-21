/* JavaScripts homeworks 6 */

// Функция-конструктор Accumulator, включающая 2 собстенных метода increment и decrement.

function Accumulator(initialValue) {
  this.value = initialValue;
  // Метод Increment
  this.increment = function () {
    return this.value++;
  };
  // Метод Decrement
  this.decrement = function () {
    return this.value--;
  };
}

// Функция-конструктор CancelableAccumulator, наследующая все методы Accumulator и имеющая свой собственный метод Clear.

function CancelableAccumulator(initialValue) {
  Accumulator.call(this, initialValue);
  this.initialValue = initialValue;
  // Метод Clear
  this.clear = function () {
    return (this.value = this.initialValue);
  };
}

// Тесты

console.log("Екземпляр прототипа Accumulator");
const myAccumulator = new Accumulator(54);
console.log(`Переданное значение ${myAccumulator.value}`);
myAccumulator.increment();
console.log(`Результат инкремента ${myAccumulator.value}`);
myAccumulator.increment();
console.log(`Результат инкремента ${myAccumulator.value}`);
myAccumulator.increment();
console.log(`Результат инкремента ${myAccumulator.value}`);
myAccumulator.decrement();
console.log(`Результат декримента ${myAccumulator.value}`);
myAccumulator.decrement();
console.log(`Результат декримента ${myAccumulator.value}`);

console.log("Екземпляр прототипа CancelableAccumulator");
const mySecondAccumulator = new CancelableAccumulator(25);
console.log(`Переданное значение ${mySecondAccumulator.value}`);
mySecondAccumulator.increment();
console.log(`Результат инкремента ${mySecondAccumulator.value}`);
mySecondAccumulator.increment();
console.log(`Результат инкремента ${mySecondAccumulator.value}`);
mySecondAccumulator.increment();
console.log(`Результат инкремента ${mySecondAccumulator.value}`);
mySecondAccumulator.decrement();
console.log(`Результат декримента ${mySecondAccumulator.value}`);
mySecondAccumulator.decrement();
console.log(`Результат декримента ${mySecondAccumulator.value}`);
console.log(
  `Возврат переданного в конструтор значения, переданное значение равно: ${mySecondAccumulator.clear()}`
);
