import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text>Dagweergave</Text>
    </View>
  );
}

export default DayView;
