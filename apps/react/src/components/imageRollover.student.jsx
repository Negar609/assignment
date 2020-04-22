/* global document, ReactDOM */

const setImageSrc = (image, attrName) => {
  const imagePath = image.getAttribute(attrName);
  image.setAttribute('src', imagePath);
};

const hoverIn = (event) => {
  // store original image source as state
  const primarySrc = event.target.getAttribute('src');
  event.target.setAttribute('data-primary', primarySrc);

  setImageSrc(event.target, 'data-secondary');
};
const mouseClick = (event) => {
  const tertiarySrc = event.target.getAttribute('src');
  event.target.setAttribute('data-secondary', tertiarySrc);

  setImageSrc(event.target, 'data-tertiary');
};

const hoverOut = (event) => {
  setImageSrc(event.target, 'data-primary');
};

// parameters optionally passed into the function/component
const Image = ({
  alt, primary, secondary, tertiary
}) => (
  <img
    alt={alt}
    src={primary}
    data-secondary={secondary}
    data-tertiary={tertiary}
    onMouseOver={hoverIn}
    onFocus={hoverIn}
    onClick={mouseClick}
    onMouseOut={hoverOut}
    onBlur={hoverOut}
  />
);

ReactDOM.render(
  [
    <Image
      key="nature"
      alt="nature, Vancouver"
      secondary="images/nature1.jpg"
      primary="images/nature2.jpg"
      tertiary="images/nature3.jpg"
    />,
  ],
  document.getElementById('root'),
);
