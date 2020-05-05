import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function DayView() {
  return (
    <>
      <HeaderBar />

      <View style={styles.container}>
        <Text>Dagweergave</Text>
      </View>
    </>
  );
}


export default DayView;
