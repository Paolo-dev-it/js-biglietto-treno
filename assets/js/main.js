// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 


function totalPriceTravel(){

    // Costante prezzo chilometri

    const kilometers = 0.21;

    // Variabile numero chilometri che deve fare l'utente

    let valueKm = document.getElementById('numbersKm').value;

    // Variabile età che ha l'utente

    let valueAge = document.getElementById('age').value;

    // Calcolo costo senza sconti al chilometro

    let price = valueKm * kilometers;

    // Calcolo costo sconto minorenne al chilometro

    let under = price * 0.2;

    // Calcolo costo sconto anziano al chilometro

    let over = price * 0.4;

    // Variabili costanti prezzo al chilometro compreso di sconto minorenne e anziano

    const childPrice = price - under;

    const seniorPrice = price - over;

    if (valueAge < 18) {
        price = childPrice.toFixed(2)
    }
    else if (valueAge >= 65) {
        price = seniorPrice.toFixed(2)
    } 
    else {
        price = price.toFixed(2)
    }

    document.getElementById('totalKm').innerHTML = "Il costo totale del tuo percorso:" + " " + price + "€"



}