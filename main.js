// JavaScripts homeworks 1

let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');

if (firstNumber && secondNumber) {
    alert(`Сумма ваших чисел: ${firstNumber + secondNumber}`);
    alert(`Разница ваших чисел: ${firstNumber - secondNumber}`);
    alert(`Результат умножения ваших чисел: ${firstNumber * secondNumber}`);
    alert(`Результат деления ваших чисел: ${firstNumber / secondNumber}`);
    alert(`Максимальное число из введённых вами чисел: ${Math.max(firstNumber, secondNumber)}`);
    alert(`Первое число: ${firstNumber % 2 === 0 ? 'чётное' : 'не чётное'}`);
    alert(`Второе число: ${secondNumber % 2 === 0 ? 'чётное' : 'не чётное'}`);
} else {
    alert('Одно из значений не было введено');
}


