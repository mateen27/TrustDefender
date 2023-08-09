import {StyleSheet,Text,View,TextInput,Image} from 'react-native'

const LoginDetailUI=()=>{
  return(
    <View style={styles.container}>
      <View>
        {<Image
        source={require('../images/welcome.jpg')}
        // resizeMode='cover'
        style = {styles.image}
        /> }
      </View>

    <Text style={{fontSize:50}}>Welcome Back</Text>  
    <Text style={{fontSize:18,color:'grey'}}>LogIn To Your Existant Acoount of TrustDefender</Text>

      <View style={{marginTop:30}}>
        <TextInput style={styles.textbox}
        placeholder=' User Name'
        // onChangeText={}
        />

        <TextInput style={styles.textbox}
        placeholder=' Password'
        secureTextEntry={true}
        // onChangeText={}
        />
        <Text style={{color:'grey',marginLeft:170}}>Forget Password?</Text>
      </View>
      <View>
       <Text style={styles.box}>LogIn</Text> 
      </View>

      <View style={{marginTop:15}}>
        <Text style={{fontSize:15}}>Or Connect Using</Text>
      </View>

      <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.box2}>Facebook</Text> 
          <Text style={styles.box2}>Google</Text> 
      </View>
    </View> 
     

  );
}

const styles = StyleSheet.create({
  textbox:{
    fontSize:15,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    width:250,
    height:50,
    textAlignVertical:'center',
    marginBottom:20
  },
  container:{
    marginTop:40,
    justifyContent:'center',
    alignItems:'center',
  },
  box:{
    backgroundColor:'black',
    width:120,
    height:45,
    borderRadius:25,
    color:'#fff',
    fontSize:20,
    marginTop:30,
    textAlignVertical:'center',
    textAlign:'center'
},
box2:{
  backgroundColor:'black',
  width:90,
  height:40,
  borderRadius:10,
  color:'#fff',
  fontSize:15,
  marginTop:10,
  textAlignVertical:'center',
  textAlign:'center',
  justifyContent:'space-between',
  marginHorizontal:10
},
 image:{

    width : 200, 
    height : 200
 },
});


export default LoginDetailUI;


