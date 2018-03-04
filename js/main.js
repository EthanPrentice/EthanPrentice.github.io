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
  $('#about_me_p').css.transform = 'translateX(-' + displacement + ')';
}

function checkVisibilities() {
  
  if ( $('#about_me_heading').visible(false) ) {
    $('#about_me_heading').animate({fontSize: "45px", opacity: "1"}, 900);
    $('.current').removeClass("current");
    $("#about_btn").addClass("current");
  }
  
  if (!($("#main_section").visible(true))) {
    if (!$("#main_container").visible(true)) {
      $("#about_me_section").css({marginTop: "65px"});
      $("header").css({position: "fixed", top: "0"});
    }
  } else {
    $("#about_me_section").css({marginTop: ""});
    $("header").css({position: "", top: ""});
  }
  
}

$(window).scroll(checkVisibilities);


$( window ).on("load", init);