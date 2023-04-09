const newYear = new Date("January 1, 2024 00:00:00 UTC").getTime();
// Передаём в переменные ссылки на объекты для вывода данных, используем деструктуризацию.
const [daysCounter, hoursCounter, minutesCounter, secondsCounter] = [
  ".day",
  ".hour",
  ".minute",
  ".second",
].map((selector) => document.querySelector(selector));
// Обновляем наши данные каждую секунду.
const countdownTimer = setInterval(() => {
  // Разница между заданной и текущей датой в миллисекундах.
  const difference = newYear - new Date().getTime();
  /* Вычисляем количество дней, часов, минут и секунд исходя из разницы между заданной
  и текущей датой в миллисекундах. Создаём соответствующие переменные с помощью деструктуризации.*/
  const [days, hours, minutes, seconds] = [
    difference / (1000 * 60 * 60 * 24),
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    (difference % (1000 * 60 * 60)) / (1000 * 60),
    (difference % (1000 * 60)) / 1000,
  ].map(Math.floor);
  // Выводим вычисленные данные в html
  daysCounter.innerHTML = days;
  hoursCounter.innerHTML = hours;
  minutesCounter.innerHTML = minutes;
  secondsCounter.innerHTML = seconds;
  // Останавливаем наш таймер с наступлением нового года!!!
  if (difference < 0) {
    clearInterval(countdownTimer);
    console.log("С новым 2024 годом!!");
  }
}, 1000);
