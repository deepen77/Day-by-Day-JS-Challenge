const goodBtn = document.querySelector(".good");
const badBtn = document.querySelector(".bad");
const goodSpan = document.querySelector(".good-click");
const badSpan = document.querySelector(".bad-click");
const clearCounters = document.querySelector(".reset");

let goodCounter = [];
let badCounter = [];

if (localStorage.hasOwnProperty("good-counts")) {
  goodCounter = JSON.parse(localStorage.getItem("good-counts"));
  let sumGoodCounts = 0;
  for (let i = 0; i < goodCounter.length; i++) {
    sumGoodCounts += goodCounter[i];
  }
  goodSpan.innerText = sumGoodCounts;
}

if (localStorage.hasOwnProperty("bad-counts")) {
  badCounter = JSON.parse(localStorage.getItem("bad-counts"));
  let sumBadCounts = 0;
  for (let i = 0; i < badCounter.length; i++) {
    sumBadCounts += badCounter[i];
  }
  badSpan.innerText = sumBadCounts;
}

const addGoodClicks = () => {
  let numberGood = parseInt(prompt("enter number"));
  if (numberGood >= 0) {
    goodCounter.push(numberGood);
  } else {
    alert("it is not a number");
  }

  let sumGoodCounts = 0;

  for (let i = 0; i < goodCounter.length; i++) {
    sumGoodCounts += goodCounter[i];
  }
  goodSpan.innerText = sumGoodCounts;
  localStorage.setItem("good-counts", JSON.stringify(goodCounter));
};

const addBadClicks = () => {
  let numberBad = parseInt(prompt("enter number"));
  if (numberBad >= 0) {
    badCounter.push(numberBad);
  } else {
    alert("it is not a number");
  }

  let sumBadCounts = 0;

  for (let i = 0; i < badCounter.length; i++) {
    sumBadCounts += badCounter[i];
  }
  badSpan.innerText = sumBadCounts;
  localStorage.setItem("bad-counts", JSON.stringify(badCounter));
};

const clearAll = () => {
  localStorage.clear();
  location.reload();
};

goodBtn.addEventListener("click", addGoodClicks);
badBtn.addEventListener("click", addBadClicks);
clearCounters.addEventListener("click", clearAll);
