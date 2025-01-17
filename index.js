console.log("Digital Welbeing");

const timeStringEle = document.querySelector(".time-string");

const updateTime = () => {
  const date = Date.now();
  timeStringEle.innerText = date;
};

setInterval(() => {
  updateTime();
}, 1000);
