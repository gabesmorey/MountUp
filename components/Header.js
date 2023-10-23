import { View, Image } from 'react-native';
import {DropdownMenu} from 'Dropdown';
import SettingsButton from './SettingsButton';

export default function Header() {
    return (
        <View style={styles.header}>
            <DropdownMenu style={styles.dropdown}></DropdownMenu>
            <Image source={require("../assets/msj_logo.png")} style={{ width: 50, height: 50 }} />
            <SettingsButton><Image source={}/></SettingsButton>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex:1,
        backgroundColor: '#003366'
    },
    dropdown: {
      color: '#FFCC00'
    }
  });