function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function moveArrow() {
  $ ("#dwn_arrow").animate({top: "93%", opacity: "0.85"}, 1000, function() {
    $ ("#dwn_arrow").animate({top: "91%", opacity: "1"}, 1000, moveArrow);
  });
}


function init() {
  setTimeout(moveArrow, 2000);
  var displacement= $ ('#carleton_logo').css.width;
  $('#about_p').css.transform = 'translateX(-' + displacement + ')';
}

function checkVisibilities() {
  
  // AboutMe Animations
  if ( $('#about_heading').visible(false) ) {
    $('#about_heading').animate({fontSize: "45px", opacity: "1"}, 900);
    $('.current').removeClass("current");
    $("#about_btn").addClass("current");
  }
  
  if ($("#carleton_logo").visible(true)) {
    // Correct width so not on a half pixel
    var desiredWidth = $("#carleton_logo").parent().width()*0.1 - ($("#carleton_logo").parent().width()*0.1) % 2;
    $("#carleton_logo").animate({width: desiredWidth, opacity: "1"}, 1200);
  }
  
  
  // Header Transitions
  if (!($("#main_section").visible(true))) {
    if (!$("#main_container").visible(true)) {
      $("#about_section").css({marginTop: "65px"});
      $("header").css({position: "fixed", top: "0"});
    }
  } else {
    $("#about_section").css({marginTop: ""});
    $("header").css({position: "", top: ""});
  }
  
}


$(window).scroll(checkVisibilities);


$( window ).on("load", init);