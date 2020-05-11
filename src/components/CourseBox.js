import React from 'react';
import { View, StyleSheet } from 'react-native';

import globalStyles from '../style/globals';
import { PRIMARY_COLOR, LIGHT_TEXT } from '../style/contstants';

import CustomText from './CustomText';


const styles = StyleSheet.create({
  courseSegments: {
    display: 'flex',
    flexDirection: 'row',
  },
  courseSegment: {
    marginLeft: 15,
    marginTop: '6.25%',
  },
});

function CourseBox() {
  return (
    <View style={globalStyles.box}>
      <View style={styles.courseSegments}>
        <View style={styles.courseSegment}>
          <CustomText color={PRIMARY_COLOR}>13:15</CustomText>
          <CustomText>14:00</CustomText>
        </View>
        <View style={styles.courseSegment}>
          <CustomText weight="bold">NED</CustomText>
          <CustomText color={LIGHT_TEXT}>GRN2.04</CustomText>
        </View>
      </View>
    </View>
  );
}

export default CourseBox;
