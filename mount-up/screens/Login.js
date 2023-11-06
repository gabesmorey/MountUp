import { View, Text, Button } from "react-native";

function Login({ navigation }){
    return(
         <View>
            <Text>This is the home page</Text>
            <Button title="Log in" onPress={()=> navigation.navigate("App")} />
            <Button title="Register" onPress={()=> navigation.navigate("Register")} />
        </View>
    );  
}

export default Login;