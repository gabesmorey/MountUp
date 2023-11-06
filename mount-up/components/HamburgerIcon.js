import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from 'react-native-vector-icons';

export default function HamburgerIcon({navigation}){
    function onClick(){
        navigation.toggleDrawer();
    }

    return(
        <TouchableOpacity containerStyle={buttonStyles.hamburgerIcon} onPress={() => onClick()}>
            <Ionicons name="menu" size={40} color={"#003366"}/>
        </TouchableOpacity>
    )
}

const buttonStyles = StyleSheet.create({
    hamburgerIcon: {
        backgroundColor: "#FFCC00",
        borderRadius: 5
    },
})