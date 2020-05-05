import React from "react";
import { BottomNavigation } from "react-native-paper";
import { Text, View } from "react-native";
import DayView from "../views/DayView";

const DayViewRoute = () => <DayView />;

const HomeRoute = () => <Text>Home</Text>;

const SettingsRoute = () => <Text>Instellingen</Text>;

export default class CustomBottomNavigation extends React.Component {
  state = {
    index: 0,
    routes: [
      {
        key: "DayView",
        title: "Dagweergave",
        icon: "calendar",
      },
      { key: "Home", title: "Home", icon: "home" },
      { key: "Settings", title: "Instellingen", icon: "settings" },
    ],
  };

  _renderScene = BottomNavigation.SceneMap({
    DayView: DayViewRoute,
    Home: HomeRoute,
    Settings: SettingsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={(index) => {
          this.setState({ index });
        }}
        renderScene={this._renderScene}
      />
    );
  }
}
