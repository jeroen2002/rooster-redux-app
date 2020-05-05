import React from 'react';
import { View, Text } from 'react-native';

export default class DayView extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Dagweergave</Text>
      </View>
    );
  }
}
