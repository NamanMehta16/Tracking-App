import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignoutScreen from "./src/screens/SignoutScreen";
import TrackdetailScreen from "./src/screens/TrackdetailScreen";
import TrackcreateScreen from "./src/screens/TrackcreateScreen";
import TracklistScreen from "./src/screens/TracklistScreen";

const SwitchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signout: SignoutScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Account: AccountScreen,
    Create: TrackcreateScreen,
    Tracklistflow: createStackNavigator({
      List: TracklistScreen,
      Detail: TrackdetailScreen,
    }),
  }),
});
const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
