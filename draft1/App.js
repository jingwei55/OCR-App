import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Optical Character Recognition App
        </Text>
      </View>
      
      <Text style={styles.paragraph}>
        Insert new image of ticket number or search for existing ticket number
      </Text>
      <View style={styles.entry}>
        <Text style={styles.paragraph}>
          Entry 1
        </Text>
      </View>
      <View style={styles.entry}>
        <Text style={styles.paragraph}>
          Entry 2
        </Text>
      </View>
      <View style={styles.entry}>
        <Text style={styles.paragraph}>
          Entry 3
        </Text>
      </View>
      <View style={styles.entry}>
        <Text style={styles.paragraph}>
          Entry 4
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 18,
    textAlign: 'center',
  },
  header: {
    flex: 0.15,
    backgroundColor: "cornsilk",
    borderStyle: "dashed",
    marginBottom: 20,
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  entry: {
    flex: 0.15,
    backgroundColor: "darkgray",
    marginBottom: 20,
    borderWidth: 2,
  },
  btn: {
    position: 'absolute',
        top: -200,
        left: 300,
    justifyContent: 'flex-end',
  },
});
