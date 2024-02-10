


$(document).ready(function(){
  // sessionStorage.setItem("active","home")
  var element = sessionStorage.getItem("active");
// console.log(element);
var item=document.getElementById(element);
item.classList.add("activve");
item.style.color="red";
  

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
        $('.nav-toggle').toggle();
        console.log("hello")
    })
});


function setActive(id){
  sessionStorage.setItem("active",id)
  activeElement = document.getElementById(id);
  activeElement.classList.add("activve");
  
  console.log(id)


 
}


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

  