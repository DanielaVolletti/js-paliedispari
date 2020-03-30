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

// verifico parola inserita dall'utente letta al contrario
console.log("La parola inserita letta al contrario è " + reverseString(parolaUser));

// verifico che la parola revertata sia uguale alla parola inserita dall'utente e quindi palindroma, quindi dò output
if (reverseString(parolaUser) === parolaUser){
  var msg ="la parola è palindroma";
} else {
  msg = "la parola non è palindroma";
}

console.log("La parola inserita dall'utente è " + parolaUser + " , la medesima parola letta al contrario è " + reverseString(parolaUser) + " quindi: " + msg);
