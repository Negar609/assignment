function attr() {
  $('h1').attr('style', 'color: red');

  // TODO inclass: Change the href attribute

  // SOLUTION
  $('#demo')
    .attr('href', 'https://www.vanarts.com')
    .text('Visit VanArts')
    .attr('title', 'Go to VanArts'); // tool tip
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    attr,
  };
}
