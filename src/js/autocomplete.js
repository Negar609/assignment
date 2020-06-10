/* global document */

function autocomplete() {
  function keyup() {
    $.ajax({
      url: `/api/autocomplete?keyword=${this.value}`,
      success: (result) => {
        const container = document.querySelector('#country_suggestions');
        const applyToLI = (item) => `<li>${item}</li>`;
        container.innerHTML = result.items.map(applyToLI).join('');
      },
    });
  }

  function bindDom() {
    document.querySelector('#country_keywords').addEventListener('keyup', keyup);
  }



  bindDom();
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    autocomplete,
  };
}
