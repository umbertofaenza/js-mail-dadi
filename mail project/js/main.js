const emails = [
  "example1@mail.com",
  "example2@mail.com",
  "example3@mail.com",
  "example4@mail.com",
  "example5@mail.com",
  "example6@mail.com",
  "example7@mail.com",
  "example8@mail.com",
  "example9@mail.com",
  "example10@mail.com",
];

let userEmail = prompt("Inserisci qui la tue email:");
let allowedEmail = false;

for (let i = 0; i < emails.length; i++) {
  if (userEmail == emails[i]) {
    allowedEmail = true;
  }
}

if (allowedEmail) {
  console.log("Accesso effettuato");
} else {
  console.log("Accesso negato");
}
