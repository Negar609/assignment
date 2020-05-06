function pizzaSalesJS(salesTaxDate){
  consteveryProvince = salesTaxData.provinces;
  const allProvince = Object.valuesk(everyPrivince);

 

const pValues = (allProvinces.map((provinceData)=> proviceData.name));


const tvalues = (allProvinces.map((provinceData)=> proviceData.taxes));

console.log(tvalue);

const getTaxValues = Object.apply(tValues).map((taxData) => taxData.tax);
console.log(getTaxValues);

const html = pValues.map((names) => (
 '<option>${names}</option>'
));

document.getElementById('provinces').innerHTML += html;
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    
  pizzaSalesJS,
  };
}