function init() {
  $ ("#title_container").css({opacity: '0', top: '80%'});
  $ ("#title_container").animate({opacity: '1', top: '50%'}, 1200);
}

$( window ).on( "load", init);
