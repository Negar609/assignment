/* global document */
function doImageChangeJquery() {
  const setImageSrc = ($image, attrName) => {
    const imgSrc = $image.attr(attrName);
    $image.attr('src', imgSrc);
  };

  const hoverIn = function rollover() {
    const imageSource = $(this).attr('src');
    $(this).attr('data-primary', imageSource);

    setImageSrc($(this), 'data-secondary');
  };

  const hoverOut = function rollout() {
    setImageSrc($(this), 'data-primary');
  };
  

  const doClick = function changeonclick() {
    setImageSrc($(this), 'data-tertiary');
  };

  $('.imgRollOver').hover(hoverIn, hoverOut).click(doClick);
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = {
    doImageChangeJquery,
  };
}