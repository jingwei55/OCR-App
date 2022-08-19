import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
//core components, must import elements you are using
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); //change modalIsVisable state
  //put all code into this root component

  const [courseGoals, setCourseGoals] = useState([]);
  //create empty array called courseGoals, call setcourseGoals function to modify array

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    //input goals into list
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]); //append GoalText into the courseGoals array
    endAddGoalHandler(); //close modal once goal has been added
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      //modify elements (currentCourseGoals) in courseGoals array
      return currentCourseGoals.filter((goal) => goal.id !== id);
      //filter checks all elements; if condition is true keep the element, else remove from array
      //*Function returns modified array
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {/* make modal visible when button is pressed */}
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler} //link onCancel prop to hide modal function
        />
        {/* 
      - addGoalHandler will recieve user's goal 
      - Link visible prop to modalIsVisible
      - When modal is visible (addGoal button is pressed) the interface to input your goal appears
      */}
        <View style={styles.goalsContainer}>
          {/* dictate amount of space */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id} //To ensure onDeleteItem in GoalItem.js can recieve the id
                  onDeleteItem={deleteGoalHandler}
                  //must have onDeleteItem in GoalItem.Js as well
                  //onDeleteItem calls the deleteGoalHandler function
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  //style sheet object to reuse styles, can add different styles in 1 style sheet
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 5,
  },
});
