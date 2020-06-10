/* global document */

function autocomplete() {
  function keyup() {
    $('#country_spinner').removeClass('hide');
    $.ajax({
    // end point, another name for a web address
      url: `/api/autocomplete?keyword=${this.value}`,
      success: (result) => {
      // console.log(result);
        $('#country_spinner').addClass('hide');
        const suggestCon = document.querySelector('#country_suggestions');
        const liItems = result.items;
        // console.log(lItems);
        suggestCon.innerHTML = liItems.map((item) =>(
          `<li class="liStyle">${item}</li>`)).join(' ');
      },
    });
    // console.log('keyup', this.value);
  }
  function bindDom() {
    document.querySelector('#country_keywords').addEventListener('keyup', keyup);
  }
  bindDom();
}
// these are the keyboard events https://api.jquery.com/category/events/keyboard-events
// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    autocomplete,
  };
}