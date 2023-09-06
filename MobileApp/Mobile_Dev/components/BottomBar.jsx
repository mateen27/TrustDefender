import {StyleSheet,Text,Image, SafeAreaView, TouchableOpacity} from 'react-native'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
// Home Icon & Chat Image
import { Ionicons } from '@expo/vector-icons';
//Search Icon & user Image  
import { Feather } from '@expo/vector-icons';

const BottomNavigation=()=>{
  return(
    
    <SafeAreaView style = {styles.bottomContainer}>

      {/* Home Section */}
      <TouchableOpacity style={styles.styleIcon}>
        {/* <Image
        source={require('../images/home.jpeg')}
        resizeMode='cover'
        style = {styles.bottomNavBarImage}
        /> */}
        <Ionicons name="home-outline" size={20} color="#ffffff" />
        <Text style = {styles.bottomNavBarText}>Home</Text>
      </TouchableOpacity>

      {/* Search Section */}
      <TouchableOpacity style={styles.styleIcon}>
        {/* <Image
        source={require('../images/search.png')}
        resizeMode='cover'
        style = {styles.bottomNavBarImage}
        /> */}
        <Feather name="search" size={20} color="#ffffff" />
        <Text style = {styles.bottomNavBarText}>Search</Text>
      </TouchableOpacity>

      {/* Chat Section */}
      <TouchableOpacity style={styles.styleIcon}>
        {/* <Image
        source={require('../images/chat.png')}
        resizeMode='cover'
        style = {styles.bottomNavBarImage}
        /> */}
        <Ionicons name="ios-chatbubble-ellipses-outline" size={20} color="#ffffff" />
        <Text style = {styles.bottomNavBarText}>Chat</Text>
      </TouchableOpacity>

      {/* About Section */}
      <TouchableOpacity style={styles.styleIcon}>
        {/* <Image
        source={require('../images/user.jpeg')}
        resizeMode='cover'
        style = {styles.bottomNavBarImage}
        /> */}
        <Feather name="user" size={20} color="#ffffff" />
        <Text style = {styles.bottomNavBarText}>About</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer : {
    flexDirection : 'row' , 
    justifyContent : 'space-around' , 
    backgroundColor : '#333' , 
    padding : '3%' , 
    alignItems : 'center' , //aligining the items
    // borderRadius : 25 , 
    position: 'absolute', // Position it at the bottom
    bottom: 0, // Align it to the bottom of the screen
    left: 0, // Align it to the left of the screen
    right: 0, // Align it to the right of the screen
  } ,
  bottomNavBarImage : {
    width : responsiveScreenWidth(10) , 
    height : responsiveScreenHeight(5)
  } ,
  bottomNavBarText : {
    color : 'white' , 
    marginTop: '3%', // Add some space between icon and text
    fontWeight : 'bold'
  } ,
  styleIcon : {
    alignItems : 'center'
  }
});


export default BottomNavigation;