import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../components/Header';


const styles = StyleSheet.create({
  dayView: {
    backgroundColor: '#f4f4f4',
    height: '100%',
  },
});

function DayView() {
  return (
    <View style={styles.dayView}>
      <Header />
    </View>
  );
}

export default DayView;
