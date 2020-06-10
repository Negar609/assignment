/* global document, salesTaxData */

function calculateTotal(salesTax, price) {
  return (price * salesTax) + parseFloat(price);
}

function totalTax(taxes) {
  // combine federal and/or provincial sales tax into a total sales tax string
  if (taxes.length === 1) return taxes[0].tax;
  return parseFloat(taxes[0].tax + taxes[1].tax).toFixed(2);
}

function populateDropdownJQ() {
  $.each(salesTaxData.provinces, (provinceAbbr) => {
    $('#provinces')
      .append(`<option value="${totalTax(salesTaxData.provinces[provinceAbbr].taxes)}">
        ${salesTaxData.provinces[provinceAbbr].name}
      </option>`);
  });
}

function populateDropdownJS() {
  const provinceData = Object.values(salesTaxData.provinces);
  const html = provinceData.map((item) => `<option value="${totalTax(item.taxes)}">
    ${item.name}
  </option>`).join('');
  document.querySelector('#provinces').innerHTML += html;
}

function bindTaxDomJQ() {
  $('#provinces, #price').change(() => {
    const tax = $('#provinces').val();
    const price = $('#price').val();

    $('#pizzaCost').html(calculateTotal(tax, price));
  });
}

function bindTaxDomJS() {
  // convert from DOM list to Array
  Array.from(document.querySelectorAll('#provinces, #price')).forEach((dom) => {
    dom.addEventListener('change', () => {
      const tax = document.querySelector('#provinces').value;
      const price = document.querySelector('#price').value;

      document.querySelector('#pizzaCost').innerHTML = calculateTotal(tax, price);
    });
  });
}

function pizzaSalesJQ() {
  bindTaxDomJQ();
  populateDropdownJQ();
}

function pizzaSalesJS() {
  bindTaxDomJS();
  populateDropdownJS();
}
function pizzaSalesAjax() {
  $.ajax({
    url:'/tax/rates.json',
    success: () =>{
      console.log('Success rates');
    },
 });
}
// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    pizzaSalesJQ,
    pizzaSalesJS,
    pizzaSalesAjax,
  };
}
