const numbers = [1, 2, 3, 4, 5, 6];

const userNumber = numbers[Math.floor(Math.random() * numbers.length)];
console.log(userNumber);

const cpuNumber = numbers[Math.floor(Math.random() * numbers.length)];
console.log(cpuNumber);

if (userNumber > cpuNumber) {
  console.log("User wins!");
} else if (cpuNumber > userNumber) {
  console.log("CPU wins!");
} else {
  console.log("It's a draw!");
}
