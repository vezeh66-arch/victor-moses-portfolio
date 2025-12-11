const hourEle = document.querySelector(".hour");
const minutesEle = document.querySelector(".minutes");
const secondsEle = document.querySelector(".seconds");

const now = new Date();

hourEle.textContent = now.getHours();
minutesEle.textContent = now.getMinutes();
secondsEle.textContent = now.getSeconds();

setInterval(function () {
  const now = new Date();

  hourEle.textContent = now.getHours();
  minutesEle.textContent = now.getMinutes();
  secondsEle.textContent = now.getSeconds();
}, 999);
