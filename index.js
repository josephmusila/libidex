
$(document).ready(function(){
    // stickyNavbar();
    var navbarOffset = $("#navbar").offset().top;

    // Add a scroll event listener
    $(window).scroll(function() {
      // Check if the user has scrolled past the navbar
      if ($(window).scrollTop() >= navbarOffset) {
        // Add the sticky class to the navbar
        // console.log("hi")
        $("#navbar").addClass("sticky");
      } else {
        // Remove the sticky class from the navbar
        $("#navbar").removeClass("sticky");
      }
    });

    $('#toggle').click(function(){
        $('.nav-toggle').toggle()
    })
});



function stickyNavbar(){
    $(window).scroll(function(){
       
        if($(this).scrollTop() > 100){
            $(".navbar").addClass("sticky-nav");
            console.log("hello")
            // rotateCards(); 
        }else{
            $(".navbar").removeClass("sticky-nav");
            console.log("hi")
        }
    })
}
document.addEventListener("DOMContentLoaded", function () {
  
    let timeInSeconds = 30 * 60; // 30 minutes
  
    
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
  
   
    const timerInterval = setInterval(updateTimer, 1000);
  
    function updateTimer() {
    
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
  
     
      hoursElement.textContent = String(hours).padStart(2, "0");
      minutesElement.textContent = String(minutes).padStart(2, "0");
      secondsElement.textContent = String(seconds).padStart(2, "0");
  
     
      if (timeInSeconds <= 0) {
        clearInterval(timerInterval); // Stop the timer
        alert("Time's up!"); // You can customize the action when the timer reaches 0
      } else {
        timeInSeconds--; // Decrement the time
      }
    }
  });
  