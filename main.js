// JavaScripts homeworks 1

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

if (firstNumber && secondNumber) {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    alert(`Сумма ваших чисел: ${num1 + num2}`);
    alert(`Разница ваших чисел: ${num1 - num2}`);
    alert(`Результат умножения ваших чисел: ${num1 * num2}`);
    alert(`Результат деления ваших чисел: ${num1 / num2}`);
    alert(`Максимальное число из введённых вами чисел: ${Math.max(num1, num2)}`);
    alert(`Первое число: ${num1 % 2 === 0 ? 'чётное' : 'не чётное'}`);
    alert(`Второе число: ${num2 % 2 === 0 ? 'чётное' : 'не чётное'}`);
} else {
    alert('Одно из значений не было введено');
}


