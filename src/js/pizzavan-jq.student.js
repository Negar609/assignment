function pizzaSalesJQa(salesTaxData) {
  const pv = salesTaxData.provinces;
  const nameOfPv = Object.values(pv);
  
  const ckeckSelected = () => {
    const selectedValue = $('#provinces').children('option:selected').val();
    nameOfPv.map((index) => (
      $.each(nameOfPv, () => {
 if (index.name === selectedValue) {
         
 if (index.taxes[1]) {
 const taxAmt = index.taxes[1].tax + index.taxes[0].tax;
    const clean = taxAmt.toFixed(2);
      const price = parseInt($('#price').val(), 10);
        const numTax = price * clean;
        const afterTax = price + numTax;
        const display = `<p>tax:$${clean * 100}%</p><p>total:$${afterTax}</p>`;
      $('#pizzaCost').append(display);
         
    } else {
    const taxAmt = index.taxes[0].tax;
     const afterTax = $('#price').val() + ($('#price').val() * taxAmt);
       $('#pizzaCost').html(afterTax);
    console.log($('#price').val());
     console.log(taxAmt);
        console.log(afterTax);
          }
        }
      })
    ));
  };
  
  const arr = nameOfPv.map((name) => (
    `<option value="${name.name}">${name.name}</option>`
  ));
  $('#provinces').append(arr);
  $('#provinces').change(ckeckSelected);
  // console.log(nameOfPv);
  $('#pizzaCost').append(display);
 }
 // If Node.js then export as public
 if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    pizzaSalesJQa,
  };
 }
  
 
 