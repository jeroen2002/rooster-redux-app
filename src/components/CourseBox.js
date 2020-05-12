import React from 'react';
import { View, StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import globalStyles from '../style/globals';
import { PRIMARY_COLOR, LIGHT_TEXT, ROOM_GREEN } from '../style/contstants';

import CustomText from './CustomText';


const styles = StyleSheet.create({
  courseSegments: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
  },
  courseSegment: {
    marginLeft: 15,
  },
  courseRoom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseCircle: {
    marginLeft: 3,
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
          <View style={styles.courseRoom}>
            <CustomText color={LIGHT_TEXT}>GRN2.004</CustomText>
            <FontAwesome style={styles.courseCircle} name="circle" size={10} color={ROOM_GREEN} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CourseBox;
