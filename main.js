/* JavaScripts homeworks 8 */

// 1

function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let numbers = [1, 2, 3, 4, 5];

let avg = calculateAverage(numbers);
console.log("The average is: " + avg);

// 2

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHello = function () {
  return `Hi. My name is ${this.name} and I'm ${this.age} years old`;
};

const user = new User("Sherlock", 27);
console.log(user.sayHello());

// 3

const c = calculator();

console.log(c());
console.log(c());

function calculator(init = 0) {
  init++;
  return function () {
    return init++;
  };
}
