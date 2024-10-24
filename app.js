
// creo una funzione per mettere lo zero davanti ai valori minori di 10
const format = item => item < 10 ? `0${item}` : `${item}`
// creo una funzione per sottrarre il tempo della scadenza al giorno di oggi in ms

const getTimeLeft = () => {
  // ricavo il tempo di oggi
  const today = new Date().getTime();
  // sottraggo il tempo della scadenza a al tempo di oggi
  const t = futureTime - today;
  // ricavo i valori di giorni, ore, minuti e secondi in ms
  const oneDay = 24 * 60 * 60 * 1000;

  const oneHour = 60 * 60 * 1000;

  const oneMinute = 60 * 1000;

  // calcolo i valori
  let days = t / oneDay;
  // ricavo un intero dalla divisione
  days = Math.floor(days);

  let hours = Math.floor((t % oneDay) / oneHour);

  let minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = Math.floor((t % oneMinute) / 1000);

  // creo un array coi valori di cui sopra

  const values = [days, hours, minutes, seconds];


  // faccio un ciclo per assegnare dinamicamente i valori ai campi
  items.forEach((item, index) => {
    // inietto i valori nei campi 
    item.innerHTML = format(values[index]);
  });

  // pongo le condizioni per interrompere il conto alla rovescia quando arriva a 0

  if (t < 0) {
    // interrompo l'intervallo
    clearInterval(countdown);
    // inietto una stringa nel campo della scadenza
    deadline.innerHTML = `<h4 class="expired">Sorry this giveaway has expired<h4>`;
  }

};

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

// let futureDate = new Date(2025, 4, 24, 11, 30, 0);

// ricavo dei valori dinamici anziché scriverli 
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// estraggo dalla data i valori da inserire nella stringa

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

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

// imposto un intervallo per il conto alla rovescia

let countdown = setInterval(() => {
  // invoco la funzione per il tempo rimanente
  getTimeLeft();

}, 1000);
// invoco la funzione per iniettare il tempo rimanente nei campi 

getTimeLeft();