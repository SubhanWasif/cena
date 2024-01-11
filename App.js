import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { firebase } from "@expo-firebase/app";
import { Provider as FirebaseProvider } from "@expo-firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0-2hWQxTQ5X8Yi2z9Zw6H1Q2VYn1z4f4",
  authDomain: "cena-2b6b7.firebaseapp.com",
  projectId: "cena-2b6b7",
  storageBucket: "cena-2b6b7.appspot.com",
  messagingSenderId: "1018020085046",
  appId: "1:1018020085046:web:3b1d2b2b2c0b9a9e3b4e9c",
  measurementId: "G-5H0JN0C2QV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(require("./path/to/google-services.json"));
}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
