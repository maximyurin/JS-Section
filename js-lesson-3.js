/* JavaScripts homeworks 3 */
let myArray = [3, 70, 5, 43, 23, 21, 10, 2, 8, 52];
// Script for finding the sum of array elements
let sumOfArrayNumbers = 0;
for ( let i = 0; i < myArray.length; i++ ) {
    if (typeof myArray[i] == "number") {
        sumOfArrayNumbers = sumOfArrayNumbers + myArray[i];
    }
}
// Show Array
console.log('Массив с произвольными числами: ', myArray);
// Show result of the sum of array elements
console.log(`Сумма элементов массива: ${sumOfArrayNumbers}`);
// Script for finding max & min values of array elements
let maxNumberInArray = -Infinity;
let minNumberInArray = Infinity;
for ( let i = 0; i < myArray.length; i++ ) {
    if (typeof myArray[i] === "number") {
        if (myArray[i] > maxNumberInArray) {
            maxNumberInArray = myArray[i];
        }
        if (myArray[i] < minNumberInArray) {
            minNumberInArray = myArray[i];
        }
    }
}
console.log(`Максимальное число в данном массиве: ${maxNumberInArray}`)
console.log(`Минимальное число в данном массиве: ${minNumberInArray}`)
// Script for a Christmas tree
for (let i = 1; i <= 5; i++) {
    let tree = '';
    for (let a = 1; a <= i; a++) {
        tree += '#';
    }
    console.log(tree);
}