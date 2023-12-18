console.log('JS OK');

/*

 - crea una variabile km
 - chiedi all'utente quanti chilometri vuole percorrere
 - crea una variabile eta
 - chiedi all'utente l'eta
 - crea una variabile prezzochilometro (costante)
 - crea una variabile sconto20 (costante)
 - crea una variabile sconto40 (costante)
 - crea una variabile prezzo-finale
 - crea una condizione:
     se l'eta è minore di 18 anni
         allora calcola il prezzo finale, applica lo sconto del 20% (sconto20)
     altrimenti se l'eta è maggiore di 65 anni
         allora calcola il prezzo finale, applica lo sconto del 40% (sconto40)
    altrimenti
        calcola il prezzo finale standard 
 - e mostra all'utente il prezzo finale
        
*/

const km = prompt('inserisci i chilometri da percorrere', '5');
console.log(km);

const eta = prompt('inserisci la tua eta', '5');
console.log(eta);

const prezzochilometro = 0.21;
console.log(prezzochilometro);

const prezzofinale = km * prezzochilometro;
console.log(prezzofinale);

const sconto20 = prezzofinale - (((prezzofinale) / 100) * 20);
console.log(sconto20);

const sconto40 = prezzofinale - (((prezzofinale) / 100) * 40);
console.log(sconto40);








