// Initialise materialize components

var sideNav = document.querySelector('.sidenav');
var sideNavInstance = M.Sidenav.init(sideNav, {
  edge: 'right',
  draggable: true
});



var parallax = document.querySelector('.parallax');
var parallaxInstance = M.Parallax.init(parallax, {
  responsiveThreshold: 0
});


var collapsible = document.querySelector('.collapsible');
var collapsibleInstance = M.Collapsible.init(collapsible, {
  accordion: false
});

var homeCollapsible = document.querySelector('.collapsible-home');
var homeCollapsibleInstance = M.Collapsible.init(collapsible, {
  accordion: false
});

var elem = document.querySelector('.fixed-action-btn');
var instance = M.FloatingActionButton.init(elem);


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
