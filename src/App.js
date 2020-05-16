import React from 'react';
import { StatusBar } from 'react-native';

import { registerRootComponent } from 'expo';

import FontProvider from './components/providers/FontProvider';
import StateProvider from './components/providers/StateProvider';
import DayView from './views/DayView';


function App() {
  return (
    <>
      <FontProvider>
        <StateProvider>
          <DayView />
        </StateProvider>
      </FontProvider>
      <StatusBar
        backgroundColor="#f4f4f4"
        barStyle="dark-content"
        hidden={false}
      />
    </>
  );
}

registerRootComponent(App);
