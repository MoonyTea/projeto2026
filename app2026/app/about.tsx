import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
       style={ styles.container}
    >
      <Text style={ styles.text }>Página about!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(176, 0, 117)",
  },

  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

});