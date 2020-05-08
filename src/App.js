import React from 'react';
import { View, Text } from 'react-native';

import { registerRootComponent } from 'expo';

function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>RoosterRedux!</Text>
    </View>
  );
}

registerRootComponent(App);
