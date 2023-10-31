import React from "react";
import { Image, Button } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import StaffDirectory from "../screens/StaffDirectory";
import Records from "../screens/Records";
import BottomTabNavigator from "./TabNavigator";
import SettingsButton from "../components/SettingsButton";
import { useNavigation } from "@react-navigation/native";
import HamburgerIcon from "../components/HamburgerIcon";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  function settings(){
    navigation.navigate("Settings");
  }

  return (
    <Drawer.Navigator screenOptions={({navigation})=>(
      {
        headerStyle: {
          height: 100,
          backgroundColor: "#003366",
        },
        headerTitle: () => <Image source={require("../images/msj_logo.png")} />,
        headerTitleAlign: "center",
        headerRight: () => <SettingsButton onClick={settings}/>,
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerLeft: () => <HamburgerIcon navigation={navigation}/>,
        headerLeftContainerStyle: {
          paddingLeft: 10,
        }
      })}>
      <Drawer.Screen name="HomeTabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Staff Directory" component={StaffDirectory} />
      <Drawer.Screen name="Hall of Fame" component={Records} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;