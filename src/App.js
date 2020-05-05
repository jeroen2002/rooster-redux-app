import React from 'react';

import { registerRootComponent } from 'expo';

import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <>
      <NavigationBar />
    </>
  );
}

registerRootComponent(App);
