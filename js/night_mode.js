// https://codepen.io/jamesbarnett/pen/kdDBL
// "auto" night mode
  $(document).ready(function(){
  	var d = new Date();
  	var n = d.getHours();
  	if (n > 19 || n < 6)
  	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
  	  document.body.className = 'night';
  	else
  	  // Else use ‘day’ theme
  	  document.body.className = 'day';
  });


// toggleable inverter with sessionStorage
// from http://stackoverflow.com/questions/28239337/store-a-css-class-on-browser
  $('#inverter').click(function () {
    $('body').toggleClass('day night');
    if ($('body').hasClass('night')) {
      sessionStorage.setItem('theme', 'night');
    } else {
      sessionStorage.setItem('theme', 'day');
    }
  });

  $(document).ready(function() {
    var theme = sessionStorage.getItem('theme');
    if (theme !== '') {
      $('body').addClass(theme);
    }
  });
