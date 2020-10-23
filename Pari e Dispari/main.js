// scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer. L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari". Il computer genera un secondo numero casuale tra 1 e 5. Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari. Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)

// Chiedo all'utente di scegliere un numero tra 1 e 5.
var scelta_numero;

do {

    scelta_numero = parseInt(prompt('Inserisci un numero tra 1 e 5'));

} while (isNaN(scelta_numero) || scelta_numero <= 0 || scelta_numero > 5);
    console.log('Il numero scelto dall\'utente è = ' + scelta_numero);

// Chiedo all'utente di scegliere tra pari o dispari.
var scelta_pari_dispari;

do {

    scelta_pari_dispari = prompt('Scegli tra pari o dispari').toLowerCase();

} while (scelta_pari_dispari != 'pari' && scelta_pari_dispari != 'dispari');
    console.log('L\'utente ha scelto : ' + scelta_pari_dispari);
//Il computer genera un secondo numero casuale tra 1 e 5.

var numero_random = getRndInteger(1, 5)
console.log('Il numero random del pc è = ' + numero_random);

// Creo la somma tra il numero dell'utente e il numero random.
var somma = numero_random + scelta_numero;
console.log('La somma è = ' + somma);

// Se la somma del numero è pari e la scelta della parola pari o dispari è uguale alla parola pari o dispari o viceversa l'utente vince o perde.
if (somma % 2 == 0) {
    console.log('Il numero è pari');
    if (scelta_pari_dispari == 'pari') {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }
} else {
    console.log('Il numero è dispari');
    if (scelta_pari_dispari == 'dispari') {
        console.log('Hai vinto!');
    } else {
        console.log('Hai perso!');
    }
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
