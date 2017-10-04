jQuery(function() {

  // Init lunr with the fields to be searched
  window.idx = lunr(function() {
    this.field('id');
    this.field('title', { boost: 10 });
  });

  // Get the gen. search_data.json so lunr can search it locally.
  window.data = $.getJSON('/assets/data/search_data.json');

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data) {
    $.each(loaded_data, function(index, value) {
      window.idx.add(
        $.extend({ 'id': index }, value)
      );
    });
  });

  // Event when the form is submitted
  $('#site-search').submit(function(event) {
    event.preventDefault();

    // Get the value for the text field
    var searchQuery = ('#search-box').val();

    // Get lunr to perfom a search
    var results = window.idx.search(searchQuery);

    // Hand the results off to be displayed
    display_search_results(results);
  });


  function display_search_results(results) {
    var $searchResults = $('#search-results');

    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {

        // Clear any old results
        $searchResults.empty();

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];

          // Build a snipper of HTML for this result
          var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';

          // Add the snippet to the collection of results.
          $searchResults.append(appendString);
        });

      } else {
        // If there are no results, let the user know
        $searchResults.html('<li>No results found.<br/>Please check spelling, spacing, yada...</li>');
      }

    });
  }

});
