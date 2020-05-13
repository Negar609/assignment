/* global document, salesTaxData, ReactDOM */
const ProvinceDropdown = ({ provinces }) => {
  function getInitialState(){
    return {selectValue:'Radish'};
}
  // console.log('provinces', provinces);
  const provinceArr = Object.values(provinces);
  // console.log(provinceArr[2].name);
  // console.log(provinceArr);
  const optionsSelections = (provinceObj) => {
    const provinceName = provinceObj.name;
    const taxRate = provinceObj.taxes;
    // let totalTax = 0;
    // debugger;
    let t = 0;
    taxRate.forEach((taxT) => {
      t += taxT.tax;
    });
    const totalTax = t.toFixed(2);
    console.log( " Tax ", t);
​
    return (
      <option key={provinceName}  value={totalTax}>{provinceName}</option>
    );
  };
​
  const options = provinceArr.map(optionsSelections);
  // <option key="-1" value="-1">Choose your province</option>,
  options.unshift(<option key="-1" value="-1">Choose your province</option>);
​
  return (
    <select id="provinces" >{options}</select>
  );
};
function handleChange(e) {
  let price=e.target.value;
  console.log(" price ",price);
  console.log(" props ",this.props);
}
​
ReactDOM.render(
  <form>
    <ProvinceDropdown value={this.props.optionState}  provinces={salesTaxData.provinces} />
    <label htmlFor="price">
      Pizza price
      <input type="number" id="price" min="0" step="any" required="required" onChange={handleChange}/>
    </label>
    <span id="pizzaCost" />
  </form>,
  document.getElementById('root'),
);  