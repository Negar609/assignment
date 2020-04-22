/* global document */
function clickLog() {
  console.log('You clicked on a hyperlink');
}

function bindDom() {
  // Traditional event binding
  // document.querySelector('#click').onclick = clickLog;

  // Event handing with listeners
  document.querySelector('#click').addEventListener('click', clickLog);
  document.querySelector('#hover').addEventListener('mouseover', (event) => {
    // When CSS and JS can both apply the same styles, CSS wins with speed. Choose CSS
    // Only use JS over CSS when browser does not support the CSS rule(s)

    // JS is not logging
    console.log('Does this hover?');
    event.preventDefault(); // cancel the page from jumping to the top
  });

  document.querySelector('#blur').addEventListener('focus', function erase() {
    this.value = 'Blur';
  });
  document.querySelector('#blur').addEventListener('blur', function restore() {
    this.value = 'Focus';
  });

  // TODO inclass, finish the remaining events keyboard, and submit.
  // TODO ask 2 Then the generic button needs a console log
  // hint: preventDefault is needed

  // SOLUTION keyboard events
  const keyInput = document.getElementById('keyboard');

  keyInput.addEventListener('keydown', () => {
    console.log('Key Down');
  });
  keyInput.onkeyup = () => {
    console.log('Key Up');
  };
  keyInput.onkeypress = () => {
    console.log('Key Press (Arrows, Ctrl, Shift, Alt will not trigger a press. Anything that is not visual like a letter or number)');
  };

  document.getElementById('submit').onsubmit = (event) => {
    console.log('Submit');

    // return false; // cancels form action; prevents form submission
    event.preventDefault(); // cancels form action; prevents form submission
  };
  document.getElementById('btn').onclick = clickLog;
}

function events() {
  // triggered on load

  bindDom();
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    clickLog,
    events,
  };
}
