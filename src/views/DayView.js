import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import CourseBox from '../components/CourseBox';


const styles = StyleSheet.create({
  dayView: {
    backgroundColor: '#f4f4f4',
    height: '100%',
  },
  boxesContainer: {
    marginTop: 50,
    paddingLeft: 25,
    paddingRight: 25,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

function DayView() {
  const numbers = [0, 1, 2, 3];
  const courseBoxes = numbers.map((num) => <CourseBox key={num} />);

  return (
    <View style={styles.dayView}>
      <Header />
      <View style={styles.boxesContainer}>
        {courseBoxes}
      </View>
    </View>
  );
}

export default DayView;
