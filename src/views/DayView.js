import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import CourseBox from '../components/CourseBox';


const styles = StyleSheet.create({
  dayView: {
    backgroundColor: '#f4f4f4',
    height: '100%',
  },
  boxContainer: {
    marginTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    height: '100%',
  },
});

function DayView() {
  return (
    <View style={styles.dayView}>
      <Header />
      <View style={styles.boxContainer}>
        <CourseBox />
      </View>
    </View>
  );
}

export default DayView;
