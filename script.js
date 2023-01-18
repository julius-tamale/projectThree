// Set the date am counting down to
const countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

// Update the count down every 1 second
let theCount = setInterval(() => {

    // Get today's date and time
    let todayDate = new Date().getTime();

    // Find the time between now and the countdown date
    let timeBetween = countDownDate - todayDate;
    
    // Time calculations for days, hours, minutes and seconds    
    var days = Math.floor(timeBetween / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));  
    var seconds = Math.floor((timeBetween % (1000 * 60)) / 1000); 

// Display the result in the element with id="countdown"
document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);
document.getElementById("countdown").innerHTML = "Happy New Year!";
}
}, 1000);