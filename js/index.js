(() => {
  "use strict";

  let remainingSeconds = 14 * 24 * 60 * 60;

  function formatDate(value) {
    const days = Math.floor(value / (24 * 60 * 60));
    let seconds = value - days * 24 * 60 * 60;

    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds - hours * 60 * 60;

    const minutes = Math.floor(seconds / 60);
    seconds = seconds - minutes * 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function displayDate(dateObj) {
    const elementDays = document.querySelector(".timer__number--days");
    const elementHours = document.querySelector(".timer__number--hours");
    const elementMinutes = document.querySelector(".timer__number--minutes");
    const elementSeconds = document.querySelector(".timer__number--seconds");

    elementDays.textContent =
      dateObj.days < 10 ? `0${dateObj.days}` : dateObj.days;
    elementHours.textContent =
      dateObj.hours < 10 ? `0${dateObj.hours}` : dateObj.hours;
    elementMinutes.textContent =
      dateObj.minutes < 10 ? `0${dateObj.minutes}` : dateObj.minutes;
    elementSeconds.textContent =
      dateObj.seconds < 10 ? `0${dateObj.seconds}` : dateObj.seconds;
  }

  displayDate(formatDate(remainingSeconds));

  let interval = setInterval(() => {
    remainingSeconds -= 1;

    displayDate(formatDate(remainingSeconds));

    if (remainingSeconds === 0) {
      clearInterval(interval);
    }
  }, 1000);
})();
