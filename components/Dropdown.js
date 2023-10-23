import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const DropdownMenu = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 20, marginRight: 20 }}>
        <TouchableOpacity onPress={toggleDropdown}>
          <Text style={{ fontSize: 24 }}>☰</Text>
        </TouchableOpacity>
      </View>

      {isDropdownVisible && (
        <View style={{ position: 'absolute', top: 40, right: 20, backgroundColor: 'white', padding: 10 }}>
          <Text>Dropdown content goes here</Text>
        </View>
      )}
    </View>
  );
};

export default DropdownMenu;
