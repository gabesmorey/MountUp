import { View, Text } from "react-native";

function IndividualSportHome({route}){
    const sport = route.params;
    const name = sport.sport;

    return (
        <View>
            <Text>This is the {name} home</Text>
        </View>
    )
}

export default IndividualSportHome;