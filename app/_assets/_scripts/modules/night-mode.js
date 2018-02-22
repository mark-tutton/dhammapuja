

// ************************************* //
// ** Toggleable Inverter (NightMode) ** //
// ************************************* //
// toggleable inverter with sessionStorage
// from http://stackoverflow.com/questions/28239337/store-a-css-class-on-browser


  $('#inverter').click(function () {
    $('body').toggleClass('night');

    if ($('body').hasClass('night')) {
      sessionStorage.setItem('theme', 'night');
    }

    else {
      sessionStorage.setItem('theme', 'day');
    }

  });

  $(document).ready(function() {
    var theme = sessionStorage.getItem('theme');
    if (theme !== '') {
      $('body').addClass(theme);
    }
  });



  $(document).ready(function() {

    $(function () {
      $('.invert i').click(function() {

        $(this).toggleClass('feather-sun');

        if ($(this).attr('class') == 'feather-moon') {
          sessionStorage.class = 'feather-moon';
        }
        else if ($(this).attr('class') == ('feather-moon feather-sun')) {
          sessionStorage.class = 'feather-sun';
        }

      });

    });

    if(typeof(Storage) !== 'undefined') {
      $('.invert i').addClass(sessionStorage.class);
    }

  });
