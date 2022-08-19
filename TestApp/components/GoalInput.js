import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  //save user input inenteredGoalText as string, using function setEnteredGoalText

  function goalInputHandler(enteredText) {
    //ask for user input for goals
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    //same name in App.js for easier identification
    props.onAddGoal(enteredGoalText);
    //onAddGoal function will return value of enteredGoalText i.e user's goal
    setEnteredGoalText(""); //reset state back to empty string
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Insert your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText} //detect change in value of enteredGoalText to be reflected in text input
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
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
});
