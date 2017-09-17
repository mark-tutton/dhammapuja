// ************************************* //
// *** Hide Header on on scroll down *** //
// ************************************* //

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar-fixed').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar-fixed').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.navbar-fixed').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


// ************************************* //
// ** Toggleable Inverter (NightMode) ** //
// ************************************* //
// toggleable inverter with sessionStorage
// from http://stackoverflow.com/questions/28239337/store-a-css-class-on-browser


  $( '#inverter' ).click(function () {
    $( 'body' ).toggleClass( 'night' );

    if ($( 'body' ).hasClass( 'night' )) {
      sessionStorage.setItem( 'theme', 'night' );
    }

    else {
      sessionStorage.setItem( 'theme', 'day' );
    }

  });

  $(document).ready(function() {
    var theme = sessionStorage.getItem( 'theme' );
    if (theme !== '') {
      $( 'body' ).addClass(theme);
    }
  });



  $(document).ready(function() {

    $(function () {
      $( '.invert i' ).click(function() {

        $(this).toggleClass( 'feather-sun' );

        if ($(this).attr( 'class' ) == 'feather-moon' ) {
          sessionStorage.class = 'feather-moon';
        }
        else if ($(this).attr( 'class' ) == ( 'feather-moon feather-sun' )) {
          sessionStorage.class = 'feather-sun';
        }

      });

    });

    if(typeof(Storage) !== 'undefined' ) {
      $( '.invert i' ).addClass(sessionStorage.class);
    }

  });


// Initialize materialize components

  $(document).ready(function() {
    $('.parallax').parallax();

    $(".button-collapse").sideNav({
      menuWidth: 270,
      edge: 'right',
      closeOnClick: true,
      draggable: true
    });

    $('.collapsible').collapsible();
  });
