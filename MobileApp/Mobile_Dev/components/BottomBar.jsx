import {StyleSheet,Text,View,Image} from 'react-native'

const BottomNavigation=()=>{
  return(
    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', flex: 1}}>
    
    <View style={{backgroundColor:'black',marginTop:285,borderRadius:20}}>
      
      
      <View style={{flexDirection:'row',marginTop:25}}>
        <Image
        source={require('../images/home.jpeg')}
        style={styles.image}
        //  resizeMode='cover'
      />
      
      <Image
        source={require('../images/search.png')}
        style={styles.image}
        //  resizeMode='cover'
      />

      <Image
        source={require('../images/chat.png')}
        style={styles.image}
        //  resizeMode='cover'
      />

      <Image
        source={require('../images/user.jpeg')}
        style={styles.image}
        //  resizeMode='cover'
      />
      </View> 
      
      
      <View style={{flexDirection:'row',marginBottom:20}}>
      
      <Text style={styles.container}>HOME</Text>
      <Text style={styles.container}>SEARCH</Text>
      <Text style={styles.container}>CHAT</Text>
      <Text style={styles.container}>USER</Text>
      
      </View>
      
      </View>
      
      </View> 
     

  );
}

const styles = StyleSheet.create({
  image:{
    width:40,
    height: 40,
    marginHorizontal :'7%' ,
    justifyContent:'space-between',
    alignItems:'center'

  },
 
  // image: {
  //   width: '10%',
  //   height: '100%',
  //   resizeMode: 'contain', 
  //   marginTop:'8%',
  //   justifyContent : 'space-between' ,
  //   marginHorizontal : '7%' ,
  //   borderRadius:2
  // },
  container:{
    marginHorizontal :'8.3%',
    justifyContent:'space-between',
    alignItems:'center',
    fontSize:14,
    textAlign:'center',
    color:'#fff'
  },
});


export default BottomNavigation;


