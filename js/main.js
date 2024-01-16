console.log('JS OK')

const inputDistance = document.getElementById('distance')

const inputAge = document.getElementById('user_age')

const ticketGenerator = document.getElementById('ticket_btn')



ticketGenerator.addEventListener('click', function () {

    const km = inputDistance.value
    console.log(km)

    const age = inputAge.value
    console.log(age)

});