function pizzaSalesJQa(salesTaxData) {
  
  const pv = salesTaxData.provinces;
  
  const nameOfPv = Object.values(pv);
  
  const ckeckSelected = () => {
    
    const selectedValue = $('#provinces').children('option:selected').val();
    
    nameOfPv.map((key) => {
      if (key.name === selectedValue) {
        
      if (key.taxes[1]) {
  const taxAmt = key.taxes[1].tax + key.taxes[0].tax;
  const clean = taxAmt.toFixed(2);
  const price = parseInt($('#price').val(), 10);
  const numTax = price * clean;
  const afterTax = price + numTax;
  const display = `<p>tax:$${clean * 100}%</p><p>total:$${afterTax}</p>`;
          $('#pizzaCost').html(display);
          return;
        }
        if (!key.taxes[1]) {
const taxAmt = key.taxes[0].tax;const clean = taxAmt.toFixed(2);
const price = parseInt($('#price').val(), 10);
const numTax = price * clean;
const afterTax = price + numTax;
const display = `<p>tax:$${clean * 100}%</p><p>total:$${afterTax}</p>`;
  $('#pizzaCost').append(display);
  }
  }
  });
  };

  const arr = nameOfPv.map((key) => (
    `<option value="${key.name}">${key.name}</option>`
  ));
  $('#provinces').append(arr);
  $('#provinces').change(ckeckSelected);
 }
 // If Node.js then export as public
 if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    pizzaSalesJQa,
  };
 }
 
 
 