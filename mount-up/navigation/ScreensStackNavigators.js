import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import Home from "../screens/Home";
import Article from "../screens/Article";

const Stack = createStackNavigator();


export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        height: 100,
        backgroundColor: "#003366",
        borderBottomWidth: 2,
        borderBottomColor: "#FFCC00"
      },
      headerTitle: () => <Image source={require("../images/msjLogo.png")} />,
      headerTitleAlign: "center",
    }}>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}