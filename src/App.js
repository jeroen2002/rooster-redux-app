import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { registerRootComponent } from 'expo';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function App() {
  return (
    <View style={styles.container}>
      <Text>RoosterRedux!</Text>
    </View>
  );
}

registerRootComponent(App);
