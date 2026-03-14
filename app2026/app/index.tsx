import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
       style={ styles.container}
    >
      <Text style={ styles.text }>Hello World!!</Text>
    
      <Link href="/about" style={ styles.button }>
      Go to About
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  button: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 20,
    fontSize: 16,
  }

});