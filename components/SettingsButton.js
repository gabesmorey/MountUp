import { View, Image, TouchableOpacity } from 'react-native';

const SettingsButton = ({ navigation }) => {
    const navigateToSettings = () => {
      navigation.navigate('Settings'); // Replace 'Settings' with the name of your settings screen
    };
  
    return (
      <TouchableOpacity onPress={navigateToSettings}>
        <Image
          source={require('./path/to/settings-gear.png')} // Provide the correct path to your gear icon
          style={{ width: 40, height: 40 }} // Adjust the size as needed
        />
      </TouchableOpacity>
    );
  };
  
  export default SettingsButton;
  