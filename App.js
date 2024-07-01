import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AvatarProfile from "./src/components/AvatarProfile";
import HomeScreen from "./src/components/HomeScreen";
import FormLogin from "./src/components/FormLogin";

export default function App() {
  return (
    // <AvatarProfile />




    <HomeScreen/>
    //<FormLogin /> 

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
