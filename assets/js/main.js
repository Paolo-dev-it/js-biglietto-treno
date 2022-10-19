// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 


function totalPriceTravel(){

    const kilometers = 0.21

    let valueKm = document.getElementById('numbersKm').value;

    document.getElementById('totalKm').innerHTML = `Il costo totale del tuo percorso è : ${valueKm * kilometers}`

    let valueAge = document.getElementById('age').value;

    
    // let under = 20%

    // if (under ) {

    // }

    // let over = 40%
}