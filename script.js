const countDown = document.querySelector('.countdown-timer')

// Set the date am counting down too
const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the count down every 1 second
let theCount = setInterval(() => {

    // Get today's date and time
    let todayDate = new Date().getTime();

    // Find the time between now and the countdown date
    let timeBetween = countDownDate - todayDate;
    
    // Time calculations for days, hours, minutes and seconds    
    let days = Math.floor(timeBetween / (1000 * 60 * 60 * 24)); 
    let hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));  
    let seconds = Math.floor((timeBetween % (1000 * 60)) / 1000); 

// Display the result in the element with id="countdown"
    countDown.innerHTML = `${days} days ${hours} hours ${minutes} mins ${seconds} seconds`;

// If the count down is finished, write some text
    if (timeBetween < 0) {
        clearInterval(x);
        countDown.innerHTML = "Happy New Year";
    }
}, 1000);