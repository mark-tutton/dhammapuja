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
// *** End Header on scroll down *** //
// ********************************* //

// ************************************* //
// ** Toggleable Inverter (NightMode) ** //
// ************************************* //
// toggleable inverter with sessionStorage
// from http://stackoverflow.com/questions/28239337/store-a-css-class-on-browser
  $('#inverter').click(function () {
    $('body').toggleClass('day night');
    if ($('body').hasClass('night')) {
      sessionStorage.setItem('theme', 'night');
    }
    else if ($('body').hasClass('day')) {
      sessionStorage.setItem('theme', 'day');
    } else {
      $('body').removeClass('night day').addClass('day');
    }

  });

  $(document).ready(function() {
    var theme = sessionStorage.getItem('theme');
    if (theme !== '') {
      $('body').addClass(theme);
    }
  });

  $(function() {
    $('.invert').click(function (){
      $(this).find('i').toggleClass('feather-moon feather-sun');
    });
  });
  // *** End Toggleable inverter *** //
  // ******************************* //
