/* global document, ReactDOM */

const setImageSource = (image, attrName) => {
  const imagePath = image.getAttribute(attrName);
  image.setAttribute('src', imagePath);
};

const hoverIn = (event) => {
  // store original image source as state
  const primarySrc = event.target.getAttribute('src');
  event.target.setAttribute('data-primary', primarySrc);

  setImageSource(event.target, 'data-secondary');
};

const hoverOut = (event) => {
  setImageSource(event.target, 'data-primary');
};

// reusable component with dynamic prop(erties)
const Image = ({ alt, primary, secondary }) => (
  <img
    alt={alt}
    src={primary}
    data-secondary={secondary}
    width="300"
    height="250"
    onMouseOver={hoverIn}
    onFocus={hoverIn}
    onMouseOut={hoverOut}
    onBlur={hoverOut}
  />
);

ReactDOM.render(
  [
    <Image
      key="gastown"
      alt="Gastown, Vancouver"
      secondary="images/gastown-umbrellas.jpg"
      primary="images/gastown-empty.png"
    />,
    <Image
      key="seabus"
      alt="Seabus, Vancouver"
      secondary="images/seabus.jpg"
      primary="images/seabus-walkway.jpg"
    />,
  ],
  document.getElementById('root'),
);
