import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/tsc.jpg")}
        />
        {/* use '..' to go up 1 layer in file directory */}
        <TextInput
          style={styles.textInput}
          placeholder="Insert your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText} //detect change in value of enteredGoalText to be reflected in text input
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff", //outline of the textInput box
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6, //round corners
    width: "100%", //takes up percentage of the width of the container
    // marginRight: 8, //space between text-boxes
    padding: 16, //for text to be not touching the edge
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
});
