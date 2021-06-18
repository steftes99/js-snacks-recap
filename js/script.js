// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

const numeri = [1, 4, 7, 12, 32, 21, 2];

let a = parseInt(prompt('Inserisci un numero tra 1 e 7'));
let b = parseInt(prompt('Inseriscine un altro superiore al precedente'));


const filtrato = numeri.filter((number) => {
    if(number >= a && number <= b){
        return true;
    }
    return false;
})

console.log(filtrato);