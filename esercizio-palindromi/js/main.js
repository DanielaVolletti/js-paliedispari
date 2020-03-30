/*
Chiedo a utente di inserire come input una parola
tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
dò output a utente dicendogli che ho verificato;
qui sicuramente da cercare ci sarà il come revertare una parola.
*/

// chiedo all'utente di inserire una parola
var parolaUser = prompt("Inserisci una parola");

// verifico parola inserita da utente
console.log("La parola inserita dall'utente è " + parolaUser);

//creo una funzione per invertire la lettura della parola inserita
function reverseString(parola) {
    // creo variabile per dividere una stringa in caratteri
    var dividiCaratteri = parola.split("");
    // creo variabile per invertire la posizione dei caratteri
    var invertiCaratteri = dividiCaratteri.reverse();
    // creo variabile per unire i caratteri precedentementi divisi in una stringa
    var unisciCaratteri = invertiCaratteri.join("");
    // faccio ritornare il valore della parola così modificata
    return unisciCaratteri;
}

// creo variabile parola dell'utente revertata
var parolaRevertata = reverseString(parolaUser);

// verifico parola inserita dall'utente letta al contrario
console.log("La parola inserita letta al contrario è " + parolaRevertata);

// creo una funzione per verificare che la parola revertata sia uguale a quella inserita, quindi do output
function palindromo(parola1,parola2) {
  if (parola1 === parola2){
    var output = "la parola è palindroma";
  } else {
    output = "la parola non è palindroma";
  }
  return output;
}

// creo variabile per identificare una parola palindroma
var parolaPalindroma = palindromo(parolaRevertata, parolaUser);

// verifico in console se parola è palindroma o meno
console.log(parolaPalindroma);

// output in console se parola è palindroma o meno
console.log("La parola inserita dall'utente è " + parolaUser + " , la medesima parola letta al contrario è " + parolaRevertata + " quindi: " + parolaPalindroma);

// output sulla pagina
document.getElementById('parola-palindroma').innerHTML = "La parola inserita dall'utente è " + parolaUser + " , la medesima parola letta al contrario è " + parolaRevertata + " quindi: " + parolaPalindroma;
