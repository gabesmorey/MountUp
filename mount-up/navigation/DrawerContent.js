import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Linking } from "react-native";
import { Entypo } from 'react-native-vector-icons';
import { View, Image, StyleSheet } from "react-native";
import HamburgerIcon from "../components/HamburgerIcon";

export default function DrawerContent(props){
    const itemStyles = {
        color: "#fff"
    }

    return(
        <DrawerContentScrollView {...props} contentContainerStyle={drawerContentStyles.container}> 
            <View style={drawerContentStyles.header}>
                <Image source={require("../images/msjLogo.png")} />
                <HamburgerIcon navigation={props.navigation}/>
            </View>

            <DrawerItemList {...props} />
            <DrawerItem style={drawerContentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>}  inactiveTintColor={itemStyles.color} label="Staff Directory" onPress={async() => await Linking.openURL('https://msjlions.com/staff-directory')} />
            <DrawerItem style={drawerContentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>}  inactiveTintColor={itemStyles.color} label="Athletic Training" onPress={async() => await Linking.openURL('https://msjlions.com/sports/2020/12/9/information-sports-medicine-MSJ-AT-Landing')} />
            <DrawerItem style={drawerContentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>}  inactiveTintColor={itemStyles.color} label="Athletic Facilities" onPress={async() => await Linking.openURL('https://msjlions.com/facilities')} />
            <DrawerItem style={drawerContentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>}  inactiveTintColor={itemStyles.color} label="Hall of Fame" onPress={async() => await Linking.openURL('https://msjlions.com/sports/hof')} />
            <DrawerItem style={drawerContentStyles.container} icon={() => <Entypo name={'link'} size={34} color={'#FFCC00'}/>}  inactiveTintColor={itemStyles.color} label="Roar Store" onPress={async() => await Linking.openURL('https://msjlions.com/facilities')} />
        </DrawerContentScrollView>
    )
}

const drawerContentStyles = StyleSheet.create({
    container: {
        width:"100%",
        paddingTop: 0,
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: "#006ABE",
        borderColor: "#000",
        borderWidth: 2,
    },
    header: {
        marginVertical: 0,
        marginHorizontal: 0,
        height:100,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: "#FFCC00",
        borderBottomWidth: 2
    }
});