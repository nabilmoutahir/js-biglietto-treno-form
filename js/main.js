console.log('JS OK')

const inputDistance = document.getElementById('distance');

const inputAge = document.getElementById('user_age');

const ticketGenerator = document.getElementById('ticket_btn');



ticketGenerator.addEventListener('click', function () {

    const km = inputDistance.value
    console.log(km);

    const age = inputAge.value
    console.log(age);

    const price = km * 0.21
    console.log(price);    

    let discountPrice = 0

    if (age == 'minorenne'){

        discountPrice = 20

    } else if (age == 'over65'){

        discountPrice = 40

    }

    const discountValue = (price * discountPrice) / 100;
    console.log (discountValue)


    const finalPrice = price - discountValue
    console.log (finalPrice)
});