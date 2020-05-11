import React from 'react';
import { View } from 'react-native';

import globalStyles from '../style/globals';

import CustomText from './CustomText';


function CourseBox() {
  return (
    <View style={globalStyles.box}>
      <CustomText style={{ textAlign: 'center', marginTop: 35 }}>Hallo</CustomText>
    </View>
  );
}

export default CourseBox;
