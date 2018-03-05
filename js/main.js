function moveArrow() {
  $ ("#dwn_arrow").animate({top: "93%", opacity: "0.85"}, 1000, function() {
    $ ("#dwn_arrow").animate({top: "91%", opacity: "1"}, 1000, moveArrow);
  });
}


function changeCurrentNavBar(elementID) {
  console.log( elementID );
  $('.current').animate({color: '#e1e1e1'}, 300, function() {
    
    $('.current').removeClass("current");
        
    $( elementID ).addClass("current");
    
    $('.current').animate({color: '#1f8f80'}, 300);
  });
}


function init() {
  setTimeout(moveArrow, 2000);
  
  current_section = $( "#main_section" );
  
  var displacement= $ ('#carleton_logo').css.width;
  $('#about_p').css.transform = 'translateX(-' + displacement + ')';
  
  $ ('navbar li').click(function() {
    navBarBtnPress($(this).attr('id'));
  });
}


function checkVisibilities() {

  $("section").each(function() {
    
      if (this !== current_section) {
          
        if ( this.getBoundingClientRect().top < $(window).height()/2) {      
          if ( this.getBoundingClientRect().bottom > $(window).height()/2) {

            console.log("Switching to: " + $(this).attr('id'));
            
            current_section = this;

            switch ($(this).attr('id')) { 
              case "main_section":
                changeCurrentNavBar("#home_btn");
                break;
              case "about_section":
                changeCurrentNavBar("#about_btn");
                break;
              case "projects_section":
                changeCurrentNavBar("#projects_btn");
                break;
            }

          }
        }
      }
    });
  
  // AboutMe Animations
  if ( $('#about_heading').visible(false) ) {
    $('#about_heading').animate({fontSize: "45px", opacity: "1"}, 900);
  }
  
  if ($("#carleton_logo").visible(true)) {
    // Correct width so not on a half pixel
    var desiredWidth = $("#carleton_logo").parent().width()*0.1 - ($("#carleton_logo").parent().width()*0.1) % 2;
    $("#carleton_logo").animate({width: desiredWidth, opacity: "1"}, 1200);
  }
  
  // Projects Animations
  if ( $('#projects_heading').visible(false) ) {
    $('#projects_heading').animate({fontSize: "45px", opacity: "1"}, 900);
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


function navBarBtnPress(elementID) {
  var pos;
  var headerHeight = $( "#header" ).height();
  console.log($( "navbar" ).height());
  switch (elementID) {
    case "home_btn":
      pos = $( "#main_section" ).position();
      $('html, body').animate({
        scrollTop: 0
      }, 400);
      changeCurrentNavBar("home_btn");
      current_section = $( "home_section" );
      break;
    
    case "about_btn":
      pos = $( "#about_section" ).position();
      $('html, body').animate({
        scrollTop: $( "#about_section").offset().top - headerHeight
      }, 400);
      changeCurrentNavBar("about_btn");
      current_section = $( "about_section" );
      break;
      
    case "projects_btn":
      pos = $( "#projects_section" ).position();
      $('html, body').animate({
        scrollTop: $( "#projects_section").offset().top - headerHeight
      }, 400);
      changeCurrentNavBar("projects_btn");
      current_section = $( "projects_section" );
      break;
  }
}



var current_section;

$(window).scroll(checkVisibilities);


$( window ).on("load", init);