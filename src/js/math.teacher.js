/* global document */

function sum(a = 0, b = 0) {
  return Number(a) + Number(b); // parseInt() will return NaN
}

function difference(a = 0, b = 0) {
  return a - b;
}

function multiply(numA, numB) {
  if (!numA || !numB) return null;

  return numA * numB;
}

function divide(numA, numB) {
  if (!numA || !numB || numB === 0) return 0;

  return numA / numB;
}

function bindCalc() {
  // DOM references
  const numA = document.getElementById('numA');
  const numB = document.getElementById('numB');
  const answer = document.getElementById('answer');
  const operator = document.getElementById('operator');

  const calc = () => {
    let math = sum;

    if (operator.value === 'Subtract') math = difference;
    if (operator.value === 'Multiply') math = multiply;
    if (operator.value === 'Divide') math = divide;

    answer.innerHTML = math(numA.value, numB.value);
  };

  // Event listeners
  numA.addEventListener('change', calc);
  numB.addEventListener('change', calc);
  operator.addEventListener('change', calc);
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    bindCalc,
    difference,
    divide,
    sum,
    multiply,
  };
}
