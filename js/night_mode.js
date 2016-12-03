// https://codepen.io/jamesbarnett/pen/kdDBL
// "auto" night mode

$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className += ' night ';
	else
	  // Else use ‘day’ theme
	  document.body.className += ' day ';
});

// toggleable inverter
// from selfcare.tech
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('inverter').onclick = function() {

    var className = ' ' + document.body.className + ' ';

    if ( ~className.indexOf(' night ') ) {
      document.body.className = className.replace(' night ', ' ');
    } else {
      document.body.className += ' night ';
    }

  };
});
