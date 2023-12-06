// IndividualSportHome.js
import { View, Text } from "react-native";
import Baseball from "./Rosters/Baseball";
import Football from "./Rosters/Football";
import Basketball from "./Rosters/Basketball";
import Volleyball from "./Rosters/Volleyball";

function IndividualRosterHome({ route }) {
    const sport = route.params;
    const name = sport.sport;

    let rosterView;

    if (name === "Basketball") {
        rosterView = <Basketball />;
    } else if (name === "Baseball") {
        rosterView = <Baseball />;
    } else if (name === "Football") {
        rosterView = <Football />;
    } else if (name === "Volleyball") {
        rosterView = <Volleyball />;
    } else {
        rosterView = <Text>No view available for {name}</Text>;
    }

    return (
        <View>
            {rosterView}
        </View>
    );
}

export default IndividualRosterHome;
