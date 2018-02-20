var sideNavOptions = {
  edge: 'right',
};
var sideNav = document.querySelector('.sidenav');
var sideNavInstance = M.Sidenav.init(sideNav, sideNavOptions);



var parallax = document.querySelector('.parallax');
var parallaxInstance = M.Parallax.init(parallax, {
  responsiveThreshold: 0
});

// var dropdownOptions = {
//
// };
// var dropdown = document.querySelector('.dropdown-trigger');
// var dropdownInstance = M.Dropdown.init(dropdown, dropdownOptions);

var collapsible = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsible, {
  accordion: false
});
