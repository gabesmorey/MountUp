import { Image, StyleSheet } from "react-native";
import {FontAwesome, Entypo} from 'react-native-vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";

import DrawerContent from "./DrawerContent";
import BottomTabNavigator from "./TabNavigator";
import SettingsButton from "../components/SettingsButton";
import HamburgerIcon from "../components/HamburgerIcon";
import AllTeams from "../screens/AllTeams";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  function settings(){
    navigation.navigate("Settings");
  }

  return (
    <Drawer.Navigator id="LeftDrawer" drawerContent={(props) => <DrawerContent {...props}/>} screenOptions={({navigation})=>(
      {
        headerStyle: {
          height: 100,
          backgroundColor: "#003366",
          borderBottomWidth: 2,
          borderBottomColor: "#FFCC00"
        },
        headerTitle: () => <Image source={require("../images/msjLogo.png")} />,
        headerTitleAlign: "center",
        headerRight: () => <SettingsButton onClick={settings}/>,
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerLeft: () => <HamburgerIcon navigation={navigation}/>,
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        drawerStyle: {
          backgroundColor: "#005599",
          paddingTop: 0,
          marginTop: 0
        },
        drawerLabelStyle: {
          color: "#fff",
        },
      })}>
        <Drawer.Screen options={{drawerItemStyle: drawerStyles.drawerItems, title:"Home", drawerIcon: ()=>(<Entypo name={'home'} size={34} color={'#FFCC00'}/>)}} name="HomeTabs" component={BottomTabNavigator} />
        <Drawer.Screen options={{drawerItemStyle: [drawerStyles.drawerItems, drawerStyles.drawerItemsGrey], drawerIcon: ()=>(<FontAwesome name={'group'} size={34} color={'#FFCC00'} />)}} name="All Teams" component={AllTeams} />
    </Drawer.Navigator>
  );
}

const drawerStyles = StyleSheet.create({
  drawerItems: {
    width:"100%",
    marginVertical: 0,
    marginHorizontal: 0,
    borderColor: "#000",
    borderWidth: 2
  },
  drawerItemsGrey: {
    backgroundColor: "#959595"
  }
})

export default DrawerNavigator;