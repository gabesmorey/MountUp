import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, Linking } from "react-native";

function Article({ navigation }){
    const drawer = navigation.getParent("LeftDrawer");
 
    // Call API to get article information via id

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
                <Text style={articleStyles.title}>This is a test title</Text>
            </View>
            <View>
                {/* Pull Content from database */}
                <Text onPress={async ()=> await Linking.openURL("https://msjlions.com/staff-directory")}>Box Score</Text>
            </View>

            <View>
                <Text style={articleStyles.content}>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</Text>
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
        padding:10,
        fontFamily: "Roboto",
        fontSize: 15,
        lineHeight: 30
    },
    links: {
        color:"#FFCC00"
    }
  });

export default Article;