import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {FontAwesome, Entypo} from 'react-native-vector-icons';


import Roster from "../screens/Roster";
import Schedule from "../screens/Schedule";
import Stats from "../screens/Stats";
import { MainStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height:60,
        backgroundColor: "#FFCC00",
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: 500,
        color: "#003366"
      }
    }}>
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name={'home'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
          title: "Home"
        }} name="HomeStack" component={MainStackNavigator} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'group'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Roster" component={Roster} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'calendar'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Schedule" component={Schedule} />
      <Tab.Screen options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={'bar-chart'}
              size={34}
              color={focused ? '#003366' : '#003366'}
            />
          ),
        }} name="Stats" component={Stats} />
      
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
