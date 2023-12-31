import { NavigationContainer } from '@react-navigation/native';
import "react-native-gesture-handler";
import { MainStackNavigator } from './navigation/MainStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}