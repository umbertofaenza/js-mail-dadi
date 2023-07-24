const numbers = [1, 2, 3, 4, 5, 6];
const playButton = document.getElementById("play-btn");
const userContainer = document.getElementById("user-num");
const cpuContainer = document.getElementById("cpu-num");
const resultContainer = document.getElementById("result-text");

playButton.addEventListener("click", function () {
  const userNumber = numbers[Math.floor(Math.random() * numbers.length)];
  userContainer.innerText = userNumber;

  const cpuNumber = numbers[Math.floor(Math.random() * numbers.length)];
  cpuContainer.innerText = cpuNumber;

  let resultMessage;

  if (userNumber > cpuNumber) {
    resultMessage = "User wins!";
  } else if (cpuNumber > userNumber) {
    resultMessage = "CPU wins!";
  } else {
    resultMessage = "It's a draw!";
  }

  resultContainer.innerText = resultMessage;
});
