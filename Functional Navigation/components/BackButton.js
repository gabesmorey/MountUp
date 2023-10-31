import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from 'react-native-vector-icons';
import { StyleSheet } from "react-native";

export default function BackButton({ onPress }){
    return(
        <TouchableOpacity onPress={()=>onPress()} containerStyle={buttonStyles.backButton}>
            <Ionicons name="arrow-back-circle-outline" size={50}/>
        </TouchableOpacity>
    )
}

const buttonStyles = StyleSheet.create({
    backButton: {
        position: "absolute",
        left: 10,
        top: 10,
        zIndex: 10
    },
})