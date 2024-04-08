import {useState} from "react";
import {Alert,ImageBackground, StyleSheet,Image,Text,TextInput,TouchableHighlight,View} from "react-native";
const App=()=>{
  const [username,setUsername]=useState("");
  const [password,setpassword]=useState("");
  const onPress=()=>{
      Alert.alert(`"Dang nhap thanh cong voi username=${username}va password=${password})`)
  }
	return(
    <ImageBackground source={require('./assets/OIP.jpg')} style={myStyle.Background}>
    <View style={myStyle.container}>
    <Image source={require('./assets/pot.jpg')} style={myStyle.img}/>
      <Text style={myStyle.buttonTextREGISTER}>
              REGISTER
            </Text>
      <TextInput 
        style={myStyle.TextInput}
        onChangeText={setUsername}
        placeholder="USERNAME"
        value={username}
      />
      <TextInput
        style={myStyle.TextInput}
        onChangeText={setpassword}
        placeholder="PASSWORD"
        secureTextEntry
        value={password}
        />
        <TouchableHighlight
          style={myStyle.button}
          onPress={onPress}>
            <Text style={myStyle.buttonText}>
              LOGIN
            </Text>
        </TouchableHighlight>
	
    </View>
    </ImageBackground>
	)
}

export default App;
const myStyle =StyleSheet.create(
	{ 
    img: {
			height:150,
    	width:300
		},
    Background: {
      
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
		container: {
		
      padding:10,
      marginTop:50
		},
		TextInput:{
			//fontSize:20,
			//fontWeerght:"bold",
			color:"black",
      backgroundColor:"white",
			borderWidth:1,
			borderColor:"blue",
			margin:5
		},
		button:{
			backgroundColor:"aqua",
			height:50,
			borderRadius:10,
			justifyContent:"center",
			alignItems:"center",
			margin:5,
      width:300
		},
		buttonText:{
			color:"white",
			fontSize:20,
			fontWeight:"bold"
		},
    buttonTextREGISTER:{
      textAlign:"right",
      color:"white",
			fontSize:20,
			fontWeight:"bold"
    }
	}
)

