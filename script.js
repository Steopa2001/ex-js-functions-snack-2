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

//-----------------------------------------------------------------------------------------------------------------------

// SNACK 7
// Crea una funzione che ferma un timer dopo un certo tempo

// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
// function eseguiEferma(messaggio, avvio, stop) {
//   const intervalId = setInterval(() => {
//     console.log(messaggio);
//   }, avvio);

//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Timer fermato!");
//   }, stop);
// }
// eseguiEferma("Ciao ogni secondo!", 1000, 5000);

//-----------------------------------------------------------------------------------------------------------------------

// SNACK 8
// Crea una funzione che simula un conto alla rovescia

// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
// function contoAllaRovescia(n) {
//   let count = n;
//   const intervalId = setInterval(() => {
//     console.log(count);
//     count--;

//     if (count < 0) {
//       clearInterval(intervalId);
//       console.log("Tempo scaduto!");
//     }
//   }, 1000);
// }
// contoAllaRovescia(5);


//-----------------------------------------------------------------------------------------------------------------------

// SNACK 9 
// Creare una funzione che esegue una sequenza di operazioni con ritardi

// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
// function sequenzaOperazioni(operazioni, intervallo) {
//   for (let i = 0; i < operazioni.length; i++) {
//     setTimeout(() => {
//       operazioni[i]();
//     }, intervallo * i);
//   }
// }
// sequenzaOperazioni([
//   () => console.log("Operazione 1"),
//   () => console.log("Operazione 2"),
//   () => console.log("Operazione 3")
// ], 2000);

//-----------------------------------------------------------------------------------------------------------------------

// SNACK 10
// Creare un throttler per limitare l’esecuzione di una funzione

// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
function creaThrottler(callback, tempoLimite) {
let ultimaEsecuzione = 0;
return function (...args){
  const ora = Date.now();
  if(ora - ultimaEsecuzione >= tempoLimite){
    ultimaEsecuzione = ora;
    callback(...args); 
  }else {
    console.log('Non posso eseguire')
  }
}
}
const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // "Eseguito!"
throttledLog(); // Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // "Eseguito!" (dopo 2.5 secondi)


