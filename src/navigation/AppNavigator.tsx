import React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Create from "../screens/Create";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import NotchedNavExample from "../screens/NotchedNavExample";

export type AppStackParamList = {
  Home: undefined;
  Create: undefined;
  Profile: undefined;
  Settings: undefined;
  NotchedNavExample: undefined;
};
export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
  
const AppStack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <AppStack.Navigator  initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        gestureEnabled: true,
      }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Create" component={Create} />
      <AppStack.Screen name="Profile" component={Profile} />
      <AppStack.Screen name="Settings" component={Settings} />
      <AppStack.Screen name="NotchedNavExample" component={NotchedNavExample} />
    </AppStack.Navigator>
  );
}
