import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
//core components, must import elements you are using
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  //put all code into this root component

  const [courseGoals, setCourseGoals] = useState([]);
  //create empty array called courseGoals, call setcourseGoals function to modify array

  function addGoalHandler(enteredGoalText) {
    //input goals into list
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]); //append GoalText into the courseGoals array
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
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      {/* addGoalHandler will recieve user's goal */}
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
  );
}

const styles = StyleSheet.create({
  //style sheet object to reuse styles, can add different styles in 1 style sheet
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
