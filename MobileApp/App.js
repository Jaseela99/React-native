import { StatusBar } from "expo-status-bar";
import {
 // Dimensions,
  StyleSheet,
  //Text,
  View,
  // Image,
  // TouchableHighlight,
  // TouchableNativeFeedback,
  // Button,
  // Alert,
  // Platform
} from "react-native";

//import { useDimensions,useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
//if we have diff orientations we use useDimensions
// console.log(useDimensions())
//const {landscape} = useDeviceOrientation()

  //to get dimensions of application device
  //console.log(Dimensions.get("screen"))


  //handlepress
  //const handlePress = () => {
    //alert("text pressed");
  //};
  return (

    //flexbox
<View style={{backgroundColor:"white",
flex:1, 
//by default it is in column
flexDirection:"row",//so horizontal is the main axis and vertical is the secondary one
justifyContent:"center",//aligns main axis to center
alignItems:"center",//aligns secondary axis to center
flexWrap:"wrap",
alignContent:"center"//when we have wrapping we use aligncontent instead of alignitems
}}>

<View style={{backgroundColor:"gold",
//flex:1 or -1 as flexgrow and flexshrink
flexBasis:100 ,//represents width or height acorrding to main axis is horizontal or vertical
//width:100,
height:100,
//to align a specific veiw alignSelf:"flex-start"
}}/>
<View style={{backgroundColor:"tomato",
//flex:1
width:100,
height:100}}/>
<View style={{backgroundColor:"dodgerblue",
//flex:1
width:100,
height:100,
}}/>
<View style={{backgroundColor:"grey",
//flex:1
width:100,
height:100,
}}/>
<View style={{backgroundColor:"greenyellow",
//flex:1
width:100,
height:100,
}}/>


  </View>
    /* View is designed to be nested inside other views and can have 0 to many children of any type.
    style can be an arry which container more than one stylesheets*/

    /* <View style={[styles.container,containerStyle]}> */


      /*  A React component for displaying text.Text supports nesting, styling, and touch handling. */
     
      /* <Text onPress={handlePress}>Hey Jaseela here!!</Text>
      <Text numberOfLines={1}>
        {" "}
        how u guys doing?? hope you are good..it is summer here..i hate
        summers..
      </Text>

      <Button
        title="click me"
        color="black"
        onPress={() =>  Alert.alert("title","button tapped",[
          {text:"yes", onPress:()=>console.log("yes")},
          {text:"no", onPress:()=>console.log("no")}
        ] )}
      /> */


      /* to add image from folder
    <Image source={require("./assets/icon.png")}/> */



      /* to add network image */
      /* image components doesnt have on press so we use touchables */


      /* <TouchableHighlight
        onPress={() => {
          alert("image tapped");
        }}
      >
        <Image
          resizeMethod="resize"
          resizeMode="repeat"
          blurRadius={1}
          fadeDuration={500}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight> */



     /*  <TouchableNativeFeedback
        onPress={() => {
          console.log("tapped");
        }}
      >
        <View
          style={{
            width: 150,
            height: 100,
            backgroundColor: "aliceblue",
          }}
        ></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" /> */
    //</View>
    
  );
}
//creates a stylesheet with reference to an obj,which validates the properties
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"pink",
//     height:"100%",
//     weight:landscape? "100%":"30%",
//   //  Returns an object which contains all available common and specific constants related to the platform.
//     paddingTop:Platform.OS==="android" ? StatusBar.currentHeight:0
//   },
// });
// //it over writes the bg color in styles.container
// const containerStyle ={backgroundColor:"orange"}