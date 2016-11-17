// https://codepen.io/jamesbarnett/pen/kdDBL
// "auto" night mode

$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className += " night";
	else
	  // Else use ‘day’ theme
	  document.body.className += " day";
});


/*
//http://stackoverflow.com/questions/18368319/toggle-css-sheets-on-click-with-javascript
//http://stackoverflow.com/questions/28620819/how-to-change-button-text-on-click-using-javascript
// toggleable night mode
function toggle() {
	var t = document.getElementById('dayTog');
	var butt = document.getElementById('togBut');
	if (t.href.match("../css/day.css") && butt.innerHTML=="Toggle Night") {
		t.href = "../css/night.css";
		butt.innerHTML = "Toggle Day";
	} else {
		t.href = "../css/day.css";
		butt.innerHTML = "Toggle Night";
	}
}
*/
