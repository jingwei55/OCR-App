import { StyleSheet, Text, View, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }} //only works for android
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
        //execute pressedItem style if GoalItem is pressed
        //works for IOS as well
      >
        {/* 
        - onDeleteItem prop is executed when button is pressed 
        - 2nd value (props.id) will be the first value recieved by 
          the function (deletehandler) onDeleteItem will call 
        - Put pressable within view for it to only affect inside item
        */}
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white", //text color
    padding: 8, //make margin affect text only, for pressable to look nicer
  },
});
