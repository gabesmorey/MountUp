import { View, Text, TouchableOpacity } from "react-native";
import { useUser } from "../context/UserContext";

function Settings(){
    const { username } = useUser();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('english');

    const changeLanguage = () => {
        // Toggle between English and Spanish
        const newLanguage = selectedLanguage === 'english' ? 'spanish' : 'english';
        setSelectedLanguage(newLanguage);
    };

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };
    
    const handleSubmit = () => {
        // Handle the logic for changing the password
        // You might call an API here to update the password in your backend
        console.log('Password changed to:', newPassword);
        // Reset the password state
        setNewPassword('');
        // Close the modal
        toggleModal();
    };

    return (
        <View style={styles.container}>
            <View style={styles.yellow_spacers}></View>
            <View><Text>Logged in as {username}</Text>
            <TouchableOpacity onPress={logout()}>Logout</TouchableOpacity>
            </View>
            <View style={styles.yellow_spacers}></View>
            <Text>Help/Support</Text>
            <View style={styles.yellow_spacers}></View>
            <Text>Language</Text>
            <TouchableOpacity onPress={changeLanguage()}/>
            <View style={styles.yellow_spacers}></View>
            <TouchableOpacity onPress={toggleModal}>
                <Text>Change Password</Text>
            </TouchableOpacity>
            <Modal visible={isModalVisible} animationType="slide">
                <View style={styles.modalContent}>
                    <Text>Change Password</Text>
                    <TextInput
                        placeholder="Enter new password"
                        onChangeText={(text) => setNewPassword(text)}
                        value={newPassword}
                        secureTextEntry
                    />
                    <Button title="Change Password" onPress={handleSubmit} />
                    <Button title="Cancel" onPress={toggleModal} />
                </View>
            </Modal>
            <View style={styles.yellow_spacers}></View>
            <TermsAndConditions/>
            <View style={styles.yellow_spacers}></View>
        </View>
    )
}    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366',
        alignItems: 'center',
        justifyContent: 'center',
    },
    yellow_spacers: {
        backgroundColor: 'FFCC00',
        flex:1,
        height: 1
    },
    modalContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default Settings;