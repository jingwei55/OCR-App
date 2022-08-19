import { StyleSheet, Text, View, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      {/* onDeleteItem prop is executed when button is pressed 
        2nd value (props.id) will be the first value recieved by the function (deletehandler) onDeleteItem will call*/}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
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
