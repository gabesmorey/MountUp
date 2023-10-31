import { View, Text, Image, StyleSheet } from "react-native";
import BackButton from "../components/BackButton";

function Article({ navigation }){
 
    function onPress(){
        navigation.navigate("Home");
    }

    return(
        <View style={articleStyles.container}>
            <BackButton onPress={onPress} />
            <View style={articleStyles.header}>
                <Image source={require("../images/msj_logo.png")} style={articleStyles.image}/>
                <Text style={articleStyles.title}>This is an article pageThis is an article pageThis is an article pageThis is an article page</Text>
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
        borderColor: "#000",
        borderWidth: 1
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        padding: 50,
    },
    content: {
        flex: 1,
        fontFamily: "Roboto",
        fontSize: 12
    }
  });

export default Article;