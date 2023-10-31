import { View, Text, Button } from "react-native";

import Article from "./Article";

function Home({ navigation }){
    return(
        <View>
            <Text>This is the home page</Text>
            <Button title="Go to Article" onPress={()=> navigation.navigate('Article')} />
        </View>  
    );
}

export default Home;