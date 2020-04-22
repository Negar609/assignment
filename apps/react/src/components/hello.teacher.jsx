/* global document, ReactDOM */
/* Stackblitz
import React from 'react';
import ReactDOM from 'react-dom';
*/

const Hello = ({ name, telephone, address }) => (
  <div>{`Call ${name} at ${telephone} ${address}`}</div>
);

const Image = ({ name }) => {
  if (name === 'happy') {
    return (
      <img
        alt="Happy"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xPh3l302psHjCbBLECQOsQHaE8%26pid%3DApi%26h%3D160&f=1"
      />
    );
  }

  return (
    <img
      alt="Sad man"
      src="https://pbs.twimg.com/ext_tw_video_thumb/1245067765704036352/pu/img/j-W9hoyfYKuAsa0K?format=jpg&name=240x240"
    />
  );
};

ReactDOM.render(
  [
    <Image name="happy" />,
    <Image name="sad" />,
    <Hello
      name="VanArts in Vancouver"
      telephone="604 682 ARTS (2787)"
      address="1234 Main Street"
    />,
    <Hello
      name="Dan BROOKS"
      telephone="604-555-5555"
      address="1234 South Street"
    />,
  ],
  document.getElementById('root'),
);
