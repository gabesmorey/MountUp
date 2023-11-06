import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from 'react-native-vector-icons';

export default function SettingsButton({onClick}){
    return(
        <TouchableOpacity onPress={() => onClick()}>
            <Ionicons name="settings-sharp" size={40} color={"#FFCC00"}/>
        </TouchableOpacity>
    )
}