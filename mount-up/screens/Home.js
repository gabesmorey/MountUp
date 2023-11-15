import { Text, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ArticlePreview from "../components/ArticlePreview";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function Home({ navigation }){
    const article = [
        {id: 0, title: "Basketball Team Won", sport: "Basketball", image:"msj_logo.png", date: ""},
        {id: 1, title: "Basketball Team Won", sport: "Basketball", image:"msj_logo.png", date: ""},
        {id: 2, title: "Basketball Team Won", sport: "Basketball", image:"msj_logo.png", date: ""},
        {id: 3, title: "Basketball Team Won", sport: "Basketball", image:"msj_logo.png", date: ""}
    ]

    return(
        <FlatList style={homeStyles.container} data={article} keyExtractor={item => item.id} renderItem={({item}) => (
             <ArticlePreview id={item.id} title={item.title} sport={item.sport} image={item.image} date={item.date} navigation={navigation}/>
        )} ListHeaderComponent={
        <ImageBackground source={require("../images/msjLogo.png")} style={homeStyles.hero}>
            <LinearGradient colors={["transparent", "#000"]} style={homeStyles.heroGradient}>
                <Image source={require("../images/heroLogo.png")}/>
                <Text style={homeStyles.heroText}>MSJ Lions</Text>
            </LinearGradient>
        </ImageBackground>}/>
    );
}

const homeStyles = StyleSheet.create({
    container: {
        backgroundColor: "#003366"
    },
    hero: {
        width: "100%",
        height: 300,
        borderBottomWidth: 2,
        borderBottomColor: "#FFCC00",
        marginBottom: 30
    },
    heroGradient: {
        width:"100%",
        height:"100%",
        padding:10,
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 20
    },
    heroText: {
        color:"#fff",
        fontSize: 40,
        fontWeight: "bold",
    }
})

export default Home;