// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
//core components, must import elements you are using

export default function App() {
  //put all code into this root component
  const [enteredGoalText, setEnteredGoalText] = useState(""); //save user input as string
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    //ask for user input for goals
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    //input goals into list
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]); //adds GoalText into the current goals array
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals: </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //style sheet object to reuse styles, can add different styles in 1 style sheet
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%", //takes up percentage of the width of the container
    marginRight: 8, //space between text-boxes
    padding: 8, //for text to be not touching the edge
  },
  goalsContainer: {
    flex: 5,
  },
});
