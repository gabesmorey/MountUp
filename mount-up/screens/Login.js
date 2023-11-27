import { View, Text, Button } from "react-native";
import { loginUser } from "../api/authService";

function Login({ navigation }){
    async function onLogin(){
        console.log(await loginUser('OniateOliver', "password"));
        navigation.navigate("App")
    }

    return(
         <View>
            <Text>This is the home page</Text>
            <Button title="Log in" onPress={onLogin} />
            <Button title="Register" onPress={()=> navigation.navigate("Register")} />
        </View>
    );  
}

export default Login;