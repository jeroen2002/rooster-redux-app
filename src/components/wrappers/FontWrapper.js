import React, { useState } from 'react';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import PropTypes from 'prop-types';


/* eslint-disable global-require */
const getFonts = () => Font.loadAsync({
  'opensans-regular': require('../../../assets/fonts/OpenSans-Regular.ttf'),
});
/* eslint-enable global-require */


function FontWrapper(props) {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return props.children;
  }
  return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontLoaded(true)}
    />
  );
}

FontWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FontWrapper;
