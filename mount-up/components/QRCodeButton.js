import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from 'react-native-vector-icons';

export default function QRCodeButton({navigation}){
    function onClick(){
        navigation.navigate('QRCode');
    }

    return(
        <View>
            <TouchableOpacity containerStyle={buttonStyles.buttonQR} onPress={() => onClick()}>
                <Ionicons name="qrcode" size={30} color={"#003366"}/>
            </TouchableOpacity>
        </View>
    )
};

const buttonStyles = StyleSheet.create({
    buttonQR: {
        backgroundColor: "#FFCC00"
    },
});
