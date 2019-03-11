// Initialise materialize components

var sideNav = document.querySelector('.sidenav');
var sideNavInstance = M.Sidenav.init(sideNav, {
  edge: 'right',
  draggable: true
});


var parallax = document.querySelectorAll('.parallax');
var parallaxInstance = M.Parallax.init(parallax, {
  responsiveThreshold: 0
});


var collapsible = document.querySelectorAll('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsible);


var fixedActionBtn = document.querySelector('.fixed-action-btn');
var fixedActionBtnInstance = M.FloatingActionButton.init(fixedActionBtn, {
  hoverEnabled: false
});


// Initialize the Jekyll Search plugin
SimpleJekyllSearch({
  searchInput: document.querySelector('.search-input'),
  resultsContainer: document.querySelector('.results-container'),
  json: '/search.json',
  noResultsText: '<span class="search-no-results">No results found</span>'
});

// SimpleJekyllSearch({
//   searchInput: document.getElementById('mob-search-input'),
//   resultsContainer: document.getElementById('mob-results-container'),
//   json: '/search.json',
//   noResultsText: '<span id="search-no-results">No results found</span>'
// });

// Initialize plyr
plyr.setup('#track');
