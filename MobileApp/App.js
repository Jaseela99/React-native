import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image ,TouchableHighlight,TouchableNativeFeedback } from "react-native";

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
    {/* to add image from folder
    <Image source={require("./assets/icon.png")}/> */}

       {/* to add network image */}
<TouchableHighlight onPress={()=>{console.log("image tapped")}}>

{/* image components doesnt have on press so we use touchables */}
       <Image 
       resizeMethod="resize"
       resizeMode="repeat"
       blurRadius={1}
       fadeDuration={500}
       source={{
         width:200,
         height:300,
         uri:'https://picsum.photos/200/300'}}/>
</TouchableHighlight>

<TouchableNativeFeedback onPress={()=>{console.log("tapped")}}>
<View style={{
width:100,
height:100,
backgroundColor:"aliceblue"}}>
  
</View>
</TouchableNativeFeedback>
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
