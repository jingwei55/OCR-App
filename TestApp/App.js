// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";
//core components, must import elements you are using

export default function App() {
  //put all code into this root component
  return (
    <View style={styles.container}>
      {/* View can only hold other components 
       Can add more nested view components to add different styles */}
      <Text>Hello World!</Text>
      <Text style={styles.dummyText}>Sup bro</Text>
      <Button title="Tap me!" />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  //style sheet object to reuse styles, can add different styles in 1 style sheet
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 16,
  },
});
