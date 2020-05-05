import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { Text } from "react-native";
import DayView from "../DayView/index";

export default function CustomBottomNavigation() {
  const [key, setKey] = useState(0);
  const [title, setTitle] = useState(0);
  const [icon, setIcon] = useState(0);

  this.state = {
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
  const DayViewRoute = () => <DayView />;

  const HomeRoute = () => <Text>Home</Text>;

  const SettingsRoute = () => <Text>Instellingen</Text>;

  _renderScene = BottomNavigation.SceneMap({
    DayView: DayViewRoute,
    Home: HomeRoute,
    Settings: SettingsRoute,
  });

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
