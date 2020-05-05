import React from 'react';
import { registerRootComponent } from 'expo';
import CustomBottomNavigation from './components/CustomBottomNavigation';

export default class App extends React.Component {
  render() {
    return (
      <>
        <CustomBottomNavigation />
      </>
    );
  }
}

registerRootComponent(App);
