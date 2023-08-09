import {StyleSheet,Text,View,Image, Button} from 'react-native'

const LoginUI=()=>{
  return(
    <View style={styles.container}>
      <Text style={{fontSize:40,fontWeight: 'bold', marginBottom:100}}>TrustDefender</Text>
        
        <View>
          <Text style={styles.bgbox}>Sign Up</Text>
          <Text style={styles.textbox}>Log In</Text>
          <Text style={{fontSize:20,textAlign:'center',textAlignVertical:'center',}}>LogIn With</Text>
        </View>

        <View style={{flex:1,flexDirection:'row'}}>
          <Text style={styles.box}></Text>
          <Text style={styles.box}></Text>
          <Text style={styles.box}></Text>
        </View>
    </View> 
     

  );
}

const styles = StyleSheet.create({
  bgbox:{
    backgroundColor:'black',
    width:290,
    height:55,
    borderRadius:10,
    color:'#fff',
    fontSize:25,
    textAlign:'center',
    textAlignVertical:'center',
    marginBottom:15
  },
  textbox:{
    width:290,
    height:55,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    color:'black',
    fontSize:25,
    textAlign:'center',
    textAlignVertical:'center',
    marginBottom:70
  },
  container:{
    marginTop:190,
    justifyContent:'center',
    alignItems:'center',
  },
  box:{
    backgroundColor:'#fff',
    width:40,
    height:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    marginTop:15,
    justifyContent:'center',
    marginHorizontal:5
}
});


export default LoginUI;


