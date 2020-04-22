/* global clickLog, window */

function jqueryEvents() {
  $('#click').click((event) => {
    event.preventDefault(); // cancel top scroll
    clickLog();
  });

  $('#hover').hover(() => {
    console.log('Hover in');
  }, () => {
    console.log('Hover out');
  });

  // TODO complete the remain events blur/focus, keyboard, and submit
  // Then add an event to the generic button

  // SOLUTION
  $(window).on('load', () => {
    console.log('Load event - all the HTML in the document has rendered');
  });

  // Notice this function literal syntax is needed for `this`
  // Common interview question for junior web devs
  // https://javascript.info/closure
  $('#blur')
    .blur(function blurValue() {
      $(this).val('Blur');
      console.log('Blur');
    })
    .focus(function focusValue() {
      $(this).val('Focus');
      console.log('Focus');
    });

  $('#keyboard')
    .keydown(() => {
      console.log('Key Down');
    })
    .keyup(() => {
      console.log('Key Up');
    })
    .keypress(() => {
      console.log('Key Press (Arrows, Ctrl, Shift, Alt will not trigger a press. Anything that is not visual like a letter or number)');
    });

  $('#submit').submit((event) => {
    console.log('Submit');
    // cancels form action; prevents form submission
    event.preventDefault();
  });

  $('#btn').click(clickLog);
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    jqueryEvents,
  };
}
