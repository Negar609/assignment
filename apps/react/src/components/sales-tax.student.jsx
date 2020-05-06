/* global document, ReactDOM, salesTaxData */

const ProvinceDropdown = ({ provinces }) => {
  function transformIntoOptions(provinceObj) {
    const provinceName = provinceObj.name;

    return (
      <option key={provinceName} value={provinceName}>{provinceName}</option>
    );
  }

  const options = Object.values(provinces).map(transformIntoOptions);

  // add option instruction to first in list
  options.unshift(<option key="-1" value="-1">Choose your province</option>);

  return (
    <select id="provinces">{options}</select>
  );
};

ReactDOM.render(
  <form>
    <ProvinceDropdown provinces={salesTaxData.provinces} />
    <label htmlFor="price">
      Pizza price
      <input type="number" id="price" min="0" step="any" required="required" />
    </label>
    <span id="pizzaCost" />
  </form>,
  document.getElementById('root'),
);


