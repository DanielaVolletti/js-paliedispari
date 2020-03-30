/*
Creo gioco pari o dispari;
L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
Generiamo un numero random (sempre da 1 a 5) per il computer.
 Sommiamo i due numeri e dichiariamo chi ha vinto.
*/

// user sceglie tra pari o dispari
var sceltaUser = prompt("Scegli pari o dispari");

// creo funzione per generare un numero random
function numRandom(min, max) {
  var numeroRandomico = Math.floor(Math.random() * (max - min + 1) + min);
  return numeroRandomico;
}

// creo variabili numero inserito da computer1 e computer2
var numUser = numRandom(1,5);
var numComputer = numRandom(1,5);

console.log("Il numero inserito dall'utente è " + numUser + " ,il numero inserito dal computer è " + numComputer);

// creo variabile per la somma dei numeri
var somma = numUser + numComputer;

console.log("La somma dei numeri è " + somma);

// verifico con condizionale se il risultato della somma è pari o dispari
if (somma % 2 === 0) {
  var risultato = "pari";
} else {
  risultato = "dispari";
}

// verifico sulla base della scelta dell'utente se ha vinto lui o il pc
if (risultato === sceltaUser) {
  var outputVittoria = "Ha vinto l'user";
} else {
  outputVittoria = "Ha vinto il computer";
}

console.log(outputVittoria);
