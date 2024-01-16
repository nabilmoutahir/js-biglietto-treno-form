console.log('JS OK')

// recupero elementi

// km utente
const inputDistance = document.getElementById('distance');

// età utente
const inputAge = document.getElementById('user_age');

// bottone che genera
const ticketGenerator = document.getElementById('ticket_btn');

// risultato
const displayPrice = document.getElementById('ticket_result')

// event listener
ticketGenerator.addEventListener('click', function () {

    // valore distanza
    const km = inputDistance.value
    console.log(km);

    // valore età
    const age = inputAge.value
    console.log(age);

    // costo per km
    const price = km * 0.21
    console.log(price);    

    // sconto
    let discountPrice = 0

    // sconto under e over
    if (age == 'minorenne'){

        discountPrice = 20

    } else if (age == 'over65'){

        discountPrice = 40

    }

    // valore sconto
    const discountValue = (price * discountPrice) / 100;
    console.log (discountValue)

    // prezzo finale scontato
    const finalPrice = price - discountValue
    console.log (finalPrice)

    // display prezzo finale
    const displayFinalPrice = finalPrice.toFixed(2) + ' Euro'
    console.log(displayFinalPrice)

    // prezzo finale mostrato in pagina
    displayPrice.innerText = ('Il prezzo del ticket è: ' + displayFinalPrice)
});

