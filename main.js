/* JavaScripts homeworks 1 */
//
// let firstNumber = prompt('Введите первое число');
// let secondNumber = prompt('Введите второе число');
//
// if (firstNumber && secondNumber) {
//     let num1 = Number(firstNumber);
//     let num2 = Number(secondNumber);
//     alert(`Сумма ваших чисел: ${num1 + num2}`);
//     alert(`Разница ваших чисел: ${num1 - num2}`);
//     alert(`Результат умножения ваших чисел: ${num1 * num2}`);
//     alert(`Результат деления ваших чисел: ${num1 / num2}`);
//     alert(`Максимальное число из введённых вами чисел: ${Math.max(num1, num2)}`);
//     alert(`Первое число: ${num1 % 2 === 0 ? 'чётное' : 'не чётное'}`);
//     alert(`Второе число: ${num2 % 2 === 0 ? 'чётное' : 'не чётное'}`);
// } else {
//     alert('Одно из значений не было введено');
// }

/* JavaScripts homeworks 2 */

let firstNumber = prompt('Введите первое число');
let secondNumber = prompt('Введите второе число');

if (firstNumber && secondNumber) {
    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);
    alert(`Сумма ваших чисел: ${num1 + num2}`);
    if (num1 < num2) {
        if (confirm('Второе число больше первого, вы получите отрицательное значение. Вы уверены что хотите продолжить операцию?')) {
            alert(`Разница ваших чисел: ${num1 - num2}`);
        }
    } else if (num1 > num2) {
        alert(`Разница ваших чисел: ${num1 - num2}`);
    }
    alert(`Результат умножения ваших чисел: ${num1 * num2}`);
    if (num2 === 0) {
        alert('На ноль делить нельзя, введите заново второе число');
        do {
            num2 = prompt('Введите ещё раз второе число');
        } while (+num2 === 0);
    }
    alert(`Результат деления ваших чисел: ${num1 / num2}`);
    alert(`Максимальное число из введённых вами чисел: ${Math.max(num1, num2)}`);
    alert(`Первое число: ${num1 % 2 === 0 ? 'чётное' : 'не чётное'}`);
    alert(`Второе число: ${num2 % 2 === 0 ? 'чётное' : 'не чётное'}`);
    alert('Спасибо за внимание! Слава Украине!');
} else {
    alert('Одно из чисел не было введено');
}

