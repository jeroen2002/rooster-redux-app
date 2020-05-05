import React from "react";
import { registerRootComponent } from "expo";
import CustomBottomNavigation from "./components/CustomBottomNavigation/index";

function App() {
  return (
    <>
      <CustomBottomNavigation />
    </>
  );
}

registerRootComponent(App);
