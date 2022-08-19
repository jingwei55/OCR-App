// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
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
    ]); //append GoalText into the currentGoals array
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
        {/* dictate amount of space */}
        <ScrollView>
          {/* make sure elements within space is scrollable */}
          {courseGoals.map((goal) => (
            //goal is an element in courseGoals
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
            //goal is a string so works in Text block
            //every item in list should have a key prop to give unique identity to each item; helps react to update list more efficiently
          ))}
        </ScrollView>
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
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white", //text color
  },
});
