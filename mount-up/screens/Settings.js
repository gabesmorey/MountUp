import { View, Text, TouchableOpacity } from "react-native";
import { useUser } from "../context/UserContext";
import HelpAndSupport from "../components/HelpandSupport";

function Settings(){
    const { updateUser } = useUser();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('english');
    const [isContactVisible, setIsContactVisible] = useState(false);

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

    const logout = () => {
        // Reset user info to empty values
        updateUser({
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            following: [''],
            isAStudent: false,
            studentID: undefined,
        });
    };

    const openContact = () => {
        setIsContactVisible(true);
    };
    
    const closeContact = () => {
        setIsContactVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.yellow_spacers}></View>
            <View>
                <TouchableOpacity onPress={logout}>
                    <Text style={styles.logoutButton}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.yellow_spacers}></View>
            <View style={styles.container}>
                <TouchableOpacity onPress={openContact}>
                    <Text>Help/Support</Text>
                </TouchableOpacity>

                <Modal visible={isContactVisible} animationType="slide" onRequestClose={closeContact}>
                    <HelpAndSupport />
                    <TouchableOpacity onPress={closeContact}>
                    <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </Modal>
            </View>
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
    logoutButton: {
        color: 'FFCC00', 
    },
});


export default Settings;
