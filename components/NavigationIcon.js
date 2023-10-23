import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet } from "react-native";

function NavigationIcon({ text, icon }) {
  return (
    <TouchableOpacity style={styles.footerButtons}>
      <FontAwesomeIcon icon={icon} size={32} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footerButtons: {
    flex: 1,
    alignItems: "center",
  },
  footerIcon: {
    flex: 2,
  },
});

export default NavigationIcon;
