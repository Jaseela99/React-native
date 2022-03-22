import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
//we use safeareaview to veiw away from the notch of the phone
  return (
    <View style={styles.container}>
      <Text>Hey Jaseela here!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink"
  },
});
