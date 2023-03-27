/* JavaScripts homework 7. DOM */

let firstNumber = Number(prompt("Введите первое число"));
let secondNumber = Number(prompt("Введите второе число"));
let testArray = [
  5,
  true,
  64,
  "Maxim",
  8,
  -11,
  32,
  false,
  32,
  19,
  2,
  "string",
  28,
  71,
  22,
];
const container = document.querySelector(".results");
let firstNumberColor;
if (firstNumber < -500) {
  firstNumberColor = "#650505";
} else if (firstNumber < -100) {
  firstNumberColor = "#b20e0e";
} else if (firstNumber < -50) {
  firstNumberColor = "#ee2e2e";
} else if (firstNumber < 0) {
  firstNumberColor = "#ff7c7c";
} else if (firstNumber <= 50) {
  firstNumberColor = "#0cb20c";
} else if (firstNumber <= 100) {
  firstNumberColor = "#087c08";
} else if (firstNumber <= 500) {
  firstNumberColor = "#0f520f";
} else {
  firstNumberColor = "#053605";
}
let secondNumberColor;
if (secondNumber < -500) {
  secondNumberColor = "#650505";
} else if (secondNumber < -100) {
  secondNumberColor = "#b20e0e";
} else if (secondNumber < -50) {
  secondNumberColor = "#ee2e2e";
} else if (secondNumber < 0) {
  secondNumberColor = "#ff7c7c";
} else if (secondNumber <= 50) {
  secondNumberColor = "#0cb20c";
} else if (secondNumber <= 100) {
  secondNumberColor = "#087c08";
} else if (secondNumber <= 500) {
  secondNumberColor = "#0f520f";
} else {
  secondNumberColor = "#053605";
}
container.insertAdjacentHTML(
  "beforeend",
  `<div class="first-number"><h2>Первое число: <span style="color: ${firstNumberColor}">${firstNumber}</span></h2></div>`
);
container.insertAdjacentHTML(
  "beforeend",
  `<div class="second-number"><h2>Второе число: <span style="color: ${secondNumberColor}">${secondNumber}</span></h2></div>`
);

function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return;
  }
  const result = num1 + num2;
  let resultColor;
  if (result < -500) {
    resultColor = "#650505";
  } else if (result < -100) {
    resultColor = "#b20e0e";
  } else if (result < -50) {
    resultColor = "#ee2e2e";
  } else if (result < 0) {
    resultColor = "#ff7c7c";
  } else if (result <= 50) {
    resultColor = "#0cb20c";
  } else if (result <= 100) {
    resultColor = "#087c08";
  } else if (result <= 500) {
    resultColor = "#0f520f";
  } else {
    resultColor = "#053605";
  }
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="result-of-sum"><h2>Сумма чисел: <span style="color: ${resultColor}">${result}</span></h2></div>`
  );
}

sum(firstNumber, secondNumber);

function diff(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = num1 - num2;
    let resultColor;
    if (result < -500) {
      resultColor = "#650505";
    } else if (result < -100) {
      resultColor = "#b20e0e";
    } else if (result < -50) {
      resultColor = "#ee2e2e";
    } else if (result < 0) {
      resultColor = "#ff7c7c";
    } else if (result <= 50) {
      resultColor = "#0cb20c";
    } else if (result <= 100) {
      resultColor = "#087c08";
    } else if (result <= 500) {
      resultColor = "#0f520f";
    } else {
      resultColor = "#053605";
    }
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-diff"><h2>Разница чисел: <span style="color: ${resultColor}">${result}</span></h2></div>`
    );
  }
}

diff(firstNumber, secondNumber);

function multi(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = num1 * num2;
    let resultColor;
    if (result < -500) {
      resultColor = "#650505";
    } else if (result < -100) {
      resultColor = "#b20e0e";
    } else if (result < -50) {
      resultColor = "#ee2e2e";
    } else if (result < 0) {
      resultColor = "#ff7c7c";
    } else if (result <= 50) {
      resultColor = "#0cb20c";
    } else if (result <= 100) {
      resultColor = "#087c08";
    } else if (result <= 500) {
      resultColor = "#0f520f";
    } else {
      resultColor = "#053605";
    }
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-multi"><h2>Произведение чисел: <span style="color: ${resultColor}">${result}</span></h2></div>`
    );
  }
}

multi(firstNumber, secondNumber);

function division(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-div"><h2 style="color: red;">Ошибка. На 0 делить нельзя</h2></div>`
    );
  }
  if (typeof num1 === "number" && typeof num2 === "number") {
    let result = (num1 / num2).toFixed(2);
    return container.insertAdjacentHTML(
      "beforeend",
      `<div class="result-of-div"><h2>Результат деления чисел: ${result}</h2></div>`
    );
  }
}

division(firstNumber, secondNumber);

/*  Max & min numbers in array */

container.insertAdjacentHTML(
  "beforeend",
  `<div class="array"><h2>Вводный массив: </h2><h3>[${testArray.join(
    ", "
  )}]</h3></div>`
);

let maxNumberInTestArray = -Infinity;
let minNumberInTestArray = Infinity;

function maxNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      if (array[i] > maxNumberInTestArray) {
        maxNumberInTestArray = array[i];
      }
    }
  }
  let resultColor;
  if (maxNumberInTestArray < -500) {
    resultColor = "#650505";
  } else if (maxNumberInTestArray < -100) {
    resultColor = "#b20e0e";
  } else if (maxNumberInTestArray < -50) {
    resultColor = "#ee2e2e";
  } else if (maxNumberInTestArray < 0) {
    resultColor = "#ff7c7c";
  } else if (maxNumberInTestArray <= 50) {
    resultColor = "#0cb20c";
  } else if (maxNumberInTestArray <= 100) {
    resultColor = "#087c08";
  } else if (maxNumberInTestArray <= 500) {
    resultColor = "#0f520f";
  } else {
    resultColor = "#053605";
  }
  return container.insertAdjacentHTML(
    "beforeend",
    `<div class="result-of-max-number"><h2>Максимальное число в массиве: <span style="color: ${resultColor};">${maxNumberInTestArray}</span></h2></div>`
  );
}

maxNumber(testArray);

function minNumber(array) {
  for (let element of array) {
    if (typeof element === "number") {
      if (element < minNumberInTestArray) {
        minNumberInTestArray = element;
      }
    }
  }
  let resultColor;
  if (minNumberInTestArray < -500) {
    resultColor = "#650505";
  } else if (minNumberInTestArray < -100) {
    resultColor = "#b20e0e";
  } else if (minNumberInTestArray < -50) {
    resultColor = "#ee2e2e";
  } else if (minNumberInTestArray < 0) {
    resultColor = "#ff7c7c";
  } else if (minNumberInTestArray <= 50) {
    resultColor = "#0cb20c";
  } else if (minNumberInTestArray <= 100) {
    resultColor = "#087c08";
  } else if (minNumberInTestArray <= 500) {
    resultColor = "#0f520f";
  } else {
    resultColor = "#053605";
  }
  return container.insertAdjacentHTML(
    "beforeend",
    `<div class="result-of-min-number"><h2>Минимальное число в массиве: <span style="color: ${resultColor};">${minNumberInTestArray}</span></h2></div>`
  );
}

minNumber(testArray);
