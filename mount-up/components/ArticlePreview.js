import { Text, StyleSheet } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function ArticlePreview({title, sport, date, navigation}){
    function openArticle(){
        navigation.navigate("Article"); 
    }

    return (
        <TouchableOpacity style={articlePreviewStyles.container} onPress={openArticle}>
            <ImageBackground style={articlePreviewStyles.container} source={require("../images/baseball.png")}>
                <LinearGradient colors={["transparent", "#000"]} style={articlePreviewStyles.gradient}>
                    <Text style={articlePreviewStyles.sportOverlay}>{sport}</Text>
                    <Text style={articlePreviewStyles.previewText}>{title}</Text>
                    <Text style={articlePreviewStyles.previewText}>{date}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const articlePreviewStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        marginBottom: 30,
    },
    gradient: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomColor: "#FFCC00",
        borderBottomWidth: 3,
    },
    sportOverlay: {
        position:"absolute",
        top: 10,
        left: 10,
        backgroundColor: "#003366",
        color: "#fff",
        padding: 5,
        borderRadius: 10
    },
    previewText: {
        color: "#fff"
    }
})

export default ArticlePreview;