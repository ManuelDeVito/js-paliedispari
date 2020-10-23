// Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)


function checkPalindrom (str) {
  return str == str.split('').reverse().join('');
}

var parola = prompt('Inserisci un nome');
var risultato = checkPalindrom(parola)

if (risultato) {
    console.log('La parola è palindroma');
} else {
    console.log('La parola non è palindroma');
}
