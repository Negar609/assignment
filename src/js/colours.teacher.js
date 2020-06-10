/* global document */
function showColouredListJq(colours) {
  // { fadedlace: '#2324124' }
  const $rainbow = $('#rainbow'); // cache the DOM reference
  $.each(colours, (colourName) => {
    // Option 1 select then create
    // $rainbow
    //   .append(`<li style="background-color: ${colourName}">${colourName}</li>`);

    // Option 2 create then select
    $(`<li>${colourName}</li>`)
      .css('background-color', colourName)
      .appendTo($rainbow);
  });
}

function showColouredListJs(colours) {
  const coloursNames = Object.keys(colours);

  const html = coloursNames.map((colourName) => (
    `<li style="background-color: ${colourName}">${colourName}</li>`
  )).join('');
  document.querySelector('#rainbow').innerHTML = html;
}

function showColouredListAjax() {
  $.ajax({
    url: 'hex.json',
    success: showColouredListJs,
    error: (jqXHR, textStatus, errorThrown) => {
      console.error('AJAX error due to', errorThrown);
    },
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    showColouredListJq,
    showColouredListJs,
    showColouredListAjax,
  };
}
