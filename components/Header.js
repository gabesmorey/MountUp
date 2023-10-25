import React from 'react';
import { StatusBar, View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

export default function Header({ navigation }) {
  const navigateToPage1 = () => {
    // Navigate to page 1 when the left button is pressed
    // You should define your navigation logic here
  };

  const navigateToSettings = () => {
    // Navigate to the settings page when the right button is pressed
    // You should define your navigation logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableHighlight onPress={navigateToPage1} style={styles.button}>
          <Image source={require('../icons/dropdown_menu/dropdownmenu.png')} style={styles.buttonImage} />
        </TouchableHighlight>
        <Image source={require('../icons/general/msj_logo.png')} style={styles.centerImage} />
        <TouchableHighlight onPress={navigateToSettings} style={styles.button}>
          <Image source={require('../icons/general/settings.png')} style={styles.buttonImage} />
        </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: '#003366',
    borderBottomColor: '#FFCC00',
    borderBottomWidth: 2,
  },
  button: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 45,
    height: 45,
  },
  centerImage: {
    marginTop: 40,
    width: 130, 
    height: 130, 
  },
});
