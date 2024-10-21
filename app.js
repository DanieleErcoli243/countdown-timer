const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// seleziono gli elementi dal DOM

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// dichiaro una variabile per stabilire la data di scadenza

let futureDate = new Date(2024, 4, 24, 11, 30, 0);

// estraggo dalla data i valori da inserire nella stringa

const year = futureDate.getFullYear();

const hours = futureDate.getHours();

const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

// monto la stringa da inserire nella scadenza

const deadlineString = `Giveaway ends on ${date} ${month} ${year} ${hours}:${minutes}am`;

// inietto la stringa nell'elemento

giveaway.innerText = deadlineString;

// ricavo il tempo della scadenza in millisecondi

const futureTime = futureDate.getTime();