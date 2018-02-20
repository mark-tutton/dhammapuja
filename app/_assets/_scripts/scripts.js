


// Initialize materialize components

  // $(document).ready(function() {
  //   $('.parallax').parallax();
  //
  //   $(".button-collapse").sideNav({
  //     menuWidth: 270,
  //     edge: 'right',
  //     closeOnClick: true,
  //     draggable: true
  //   });
  //
  //   $('.collapsible').collapsible();
  // });


  // Initialize the Jekyll Search plugin
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    noResultsText: '<span id="search-no-results">No results found</span>'
  });

  // Initialize plyr
  plyr.setup('#track');
