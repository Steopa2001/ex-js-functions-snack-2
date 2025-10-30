// SNACK 1
// Crea una funzione che somma due numeri.

// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

//funzione dichiarativa
// function somma (a, b) {
//     return a + b;
// }
// console.log(somma(10, 5))

//funzione anonima
// const somma = function(a, b) {
//     return a + b;
// }
// console.log(somma(20, 20))

//sintassi arrow function
// const somma = (a, b) => a + b;

// console.log(somma(10, 7))

//-----------------------------------------------------------------------------------------------------------------------

// SNACK 2
// Crea una arrow function che calcola il quadrato di un numero.

// // Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
// const quadrato = (n) => n * n;
// console.log(quadrato(6))

//-----------------------------------------------------------------------------------------------------------------------

// SNACK 3
// Crea una funzione eseguiOperazione

// // Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
// function eseguiOperazione (a, b, operatore) {
//     return operatore (a, b);
// }
// const somma = (a, b) => a + b;
// console.log(eseguiOperazione(2, 8, somma))

//-----------------------------------------------------------------------------------------------------------------------

// SNACK 4
// Crea un generatore di funzioni creaTimer

// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
// function creaTimer(tempo) {
//   return function () {
//     setTimeout(() => {
//       console.log("Tempo scaduto!");
//     }, tempo);
//   };
// }
// const timer = creaTimer(2000);
// timer();

//-----------------------------------------------------------------------------------------------------------------------

// SNACK 5
// Crea una funzione stampaOgniSecondo con setInterval.

// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
// function stampaOgniSecondo(messaggio) {
//   const intervalId = setInterval(() => {
//     console.log(messaggio);
//   }, 1000);

//   // Interrompe dopo 5 secondi
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Intervallo fermato!");
//   }, 5000);
// }
// stampaOgniSecondo("Ciao ogni secondo!");

//-----------------------------------------------------------------------------------------------------------------------

// SNACK 6
// Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
// function creaContatoreAutomatico(intervallo) {
//   let contatore = 0;
//   return function () {
//     setInterval(() => {
//       contatore++;
//       console.log(contatore);
//     }, intervallo);
//   };
// }
// const startCounter = creaContatoreAutomatico(1000);
// startCounter();
