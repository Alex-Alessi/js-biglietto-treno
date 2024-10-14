//! TITOLO
// Biglietto del treno

//! TRACCIA
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//! RACCOLTA DATI
//* chiedo il numero di km che vuole percorrere
const kmDaPercorrere = parseInt(
  prompt("Inserisci il numero di chilometri da percorrere: ")
);
//* verifico che siano validi
const isKmDaPercorrereValid = !isNaN(kmDaPercorrere) && kmDaPercorrere > 0;
if (!isKmDaPercorrereValid) {
  alert("Il valore inserito non è valido");
}

//* chiedo l'età del passeggero
//approssimo l'età così da avere un intero
const età = Math.floor(parseInt(prompt("Inserisci la tua età: ")));
console.log(età);

//* verifico che sia valida
const isEtàValid = !isNaN(età) && età > 0 && età < 150;
if (!isEtàValid) {
  alert("Il valore inserito non è valido");
}

//! ELABORAZIONE
//* creo una variabile costoBiglietto e calcolo il prezzo del biglietto

//* SE l'età è inferiore a 18
//*     applico lo sconto del 20% alla variabile

//* ALTRIMENTI SE l'età è superiore a 65
//*     applico lo sconto del 40% alla variabile

//* ALTRIMENTI
//*     il biglietto verrà pagato interamente

//! OUTPUT
//* stampo il prezzo del biglietto
