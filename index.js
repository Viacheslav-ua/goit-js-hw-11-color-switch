const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyEl: document.querySelector("body"),
};

const СolorСycle = () => {
  refs.bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
};

let timerId;
const onStartClick = () => {
  timerId = setInterval(СolorСycle, 1000);
  refs.startBtn.disabled = true;
};

const onStopClick = () => {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
};

refs.startBtn.addEventListener("click", onStartClick);
refs.stopBtn.addEventListener("click", onStopClick);
