const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-second');



function getTime () {
    const now = new Date();

const seconds = now.getSeconds();
const secondsDegree = ((seconds/ 60) * 360) ;
secondHand.style.transform = `rotate(${secondsDegree}deg)`

const minutes = now.getMinutes();
const minutesDegree = ((minutes / 60) * 360) ;
minuteHand.style.transform = `rotate(${minutesDegree}deg)`


const hours = now.getHours();
const hoursDegree = ((hours / 12 ) * 360) ;
hourHand.style.transform = `rotate(${hoursDegree}deg)`

}

setInterval(getTime, 1000)



