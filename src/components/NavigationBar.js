/* eslint-disable react/no-unused-state */

import React from 'react';

import { BottomNavigation } from 'react-native-paper';

import DayView from '../views/DayView';


class NavigationBar extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      routes: [
        { key: 'dayview', title: 'Home', icon: 'home' },
      ],
    };

    this.renderScene = BottomNavigation.SceneMap({
      dayview: DayView,
    });
  }

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={(index) => this.setState({ index })}
        renderScene={this.renderScene}
      />
    );
  }
}

export default NavigationBar;
