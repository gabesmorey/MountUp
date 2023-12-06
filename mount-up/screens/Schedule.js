// IndividualSportHome.js
import { View, Text } from "react-native";
import Baseball from "./Schedule/Baseball";
import Football from "./Schedule/Football";
import Basketball from "./Schedule/Basketball";
import Volleyball from "./Schedule/Volleyball";

function IndividualScheduleHome({ route }) {
    const sport = route.params;
    const name = sport.sport;

    let scheduleView;

    if (name === "Basketball") {
        scheduleView = <Basketball />;
    } else if (name === "Baseball") {
        scheduleView = <Baseball />;
    } else if (name === "Football") {
        scheduleView = <Football />;
    } else if (name === "Volleyball") {
        scheduleView = <Volleyball />;
    } else {
        scheduleView = <Text>No view available for {name}</Text>;
    }

    return (
        <View>
            {scheduleView}
        </View>
    );
}

export default IndividualScheduleHome;
