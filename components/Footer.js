import { View, StyleSheet } from "react-native";
import NavigationIcon from "./NavigationIcon";
import {
  faHouse,
  faUsers,
  faCalendar,
  faBarChart,
} from "@fortawesome/free-solid-svg-icons/";


function Footer() {
  return (
    <View style={styles.footerContainer}>
      <NavigationIcon text="home" icon={faHouse} />
      <NavigationIcon text="roster" icon={faUsers} />
      <NavigationIcon text="schedule" icon={faCalendar} />
      <NavigationIcon text="stats" icon={faBarChart} />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute",
    bottom: 0,
    height: 70,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFCC00",
  },
});

export default Footer;
