import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
//we use safeareaview to veiw away from the notch of the phone

//handlepress
const handlePress =()=>{
  console.log("text pressed")
}
return (
  /* View is designed to be nested inside other views and can have 0 to many children of any type. */
  <View style={styles.container}>
     {/*  A React component for displaying text.Text supports nesting, styling, and touch handling. */}
      <Text onPress={handlePress}>Hey Jaseela here!!</Text>
      <Text numberOfLines={1}> how u guys doing?? hope you are good..it is summer here..i hate summers..</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems:"center",
    justifyContent:"center"
  },
});
