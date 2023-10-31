import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Article from "../screens/Article";
import Settings from "../screens/Settings";


const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen name="Article" component={Article} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}