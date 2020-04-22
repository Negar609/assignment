/* global document */
function applyImageRolloverJq() {
  const setImageSource = ($image, attrName) => {
    const source = $image.attr(attrName);
    $image.attr('src', source);
  };

  const handleIn = function rollover() {
    // backup image src, and store as state data-primary
    const imageSource = $(this).attr('src');
    $(this).attr('data-primary', imageSource);

    // overwrite the image src
    setImageSource($(this), 'data-secondary');
  };

  const handleOut = function rollout() {
    setImageSource($(this), 'data-primary');
  };

  $('.js-rollover').hover(handleIn, handleOut);
}

function applyImageRolloverJs() {
  function handleInClassic() {
    const sourcePath = this.src;
    const secondaryPath = this.getAttribute('data-secondary');

    this.setAttribute('data-primary', sourcePath);
    this.src = secondaryPath;
  }

  function handleOutClassic() {
    const primaryPath = this.getAttribute('data-primary');
    this.setAttribute('src', primaryPath);
  }

  Array.from(document.querySelectorAll('.js-rollover')).forEach((img) => {
    img.addEventListener('mouseover', handleInClassic);
    img.addEventListener('mouseout', handleOutClassic);
  });
}

// If Node.js then export as public
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    applyImageRolloverJs,
    applyImageRolloverJq,
  };
}
