import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Linking } from "react-native";

function Article({ navigation }){
    const drawer = navigation.getParent("LeftDrawer");
 
    useFocusEffect(()=>{
        drawer.setOptions({
            headerShown: false
        });
    });

    navigation.addListener('blur', () => {
        drawer.setOptions({
            headerShown: true
        });
    });

    return(
        <View style={articleStyles.container}>
            <View style={articleStyles.header}>
                <Image source={require("../images/msjLogo.png")} style={articleStyles.image}/>
                <Text style={articleStyles.title}>Men's Basketball Won Their First Game</Text>
            </View>
            <View>
                <Text onPress={async ()=> await Linking.openURL("https://msjlions.com/staff-directory")}>Test</Text>
            </View>

            <View style={articleStyles.content}>

            </View>
        </View>
    );
}

const articleStyles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        width: "100%",
        minHeight: 70,
        backgroundColor: '#f1f1f1',
    },
    image:{
        width:"100%",
    },
    title: {
        fontSize: 25,
        padding:10,
        backgroundColor: "#003366",
        color:"#fff",
        fontWeight: "bold"
    },
    content: {
        flex: 1,
        fontFamily: "Roboto",
        fontSize: 12
    },
    links: {
        color:"#FFCC00"
    }
  });

export default Article;