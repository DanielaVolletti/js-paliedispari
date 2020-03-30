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

// creo funzione per verificare se numero è pari o dispari
function pariDispari(num) {
  if (num % 2 === 0) {
    var risultatoModulo = "pari";
  } else {
    risultatoModulo = "dispari";
  }
  return risultatoModulo;
}

// applico funzione per verificare se la somma è pari o dispari
var risultato = pariDispari (somma);

// stampo in console se somma è pari o dispari
console.log(risultato);

// verifico il risultato della somma
console.log("Il risultato della somma è " + risultato);

// verifico sulla base della scelta dell'utente se ha vinto lui o il pc
if (risultato === sceltaUser) {
  var outputVittoria = "Ha vinto l'user.";
} else {
  outputVittoria = "Ha vinto il computer.";
}

console.log("L'user ha scelto tra pari e dispari: " + sceltaUser + ". Il numero scelto dall'utente è " + numUser + " e il numero scelto dal computer è " + numComputer + ". La somma dei due numeri è " + somma + ". Quindi: " + outputVittoria);

// stampa del risultato in pagina
document.getElementById('pari-dispari').innerHTML = "L'user ha scelto tra pari e dispari: " + sceltaUser + ". Il numero scelto dall'utente è " + numUser + " e il numero scelto dal computer è " + numComputer + ". La somma dei due numeri è " + somma + ". Quindi: " + outputVittoria;
