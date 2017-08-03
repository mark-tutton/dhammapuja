//= require jquery/jquery-3.2.1.min
//= require materialize.min
//= require scripts
//= require chanting

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
