import React from 'react';
import { StatusBar } from 'react-native';

import { registerRootComponent } from 'expo';

import FontWrapper from './components/wrappers/FontWrapper';
import DayView from './views/DayView';


function App() {
  return (
    <>
      <FontWrapper>
        <DayView />
      </FontWrapper>
      <StatusBar
        backgroundColor="#f4f4f4"
        barStyle="dark-content"
        hidden={false}
      />
    </>
  );
}

registerRootComponent(App);
