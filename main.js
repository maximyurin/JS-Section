// JavaScripts homeworks 1

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

alert(`Сумма ваших чисел: ${Number(firstNumber) + Number(secondNumber)}`);
alert(`Разница ваших чисел: ${Number(firstNumber) - Number(secondNumber)}`);
alert(`Результат умножения ваших чисел: ${Number(firstNumber) * Number(secondNumber)}`);
alert(`Результат деления ваших чисел: ${Number(firstNumber) / Number(secondNumber)}`);
alert(`Максимальное число из введённых вами чисел: ${Math.max(Number(firstNumber), Number(secondNumber))}`);
alert(`Первое число: ${firstNumber % 2 === 0 ? 'чётное' : 'не чётное'}`);
alert(`Второе число: ${secondNumber % 2 === 0 ? 'чётное' : 'не чётное'}`);




