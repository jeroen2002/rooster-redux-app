import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import { TEXT_COLOR } from '../style/contstants';


function CustomText(props) {
  const textStyle = {
    fontFamily: 'opensans-regular',
    color: props.color,
    fontSize: props.size,
    fontWeight: props.weight,
  };

  return (
    <Text style={{ ...textStyle, ...props.style }}>{props.children}</Text>
  );
}

CustomText.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.string,
  style: PropTypes.object,

};

CustomText.defaultProps = {
  color: TEXT_COLOR,
  size: 16,
  weight: 'normal',
  style: {},
};

export default CustomText;
