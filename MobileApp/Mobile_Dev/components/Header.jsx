import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
// importing the bars image
import { Entypo } from '@expo/vector-icons';
import MenuBar from '../images/menuBarIcon.png'
import Menu from '../images/menu-bar.png'
// importing notification icon
import { Ionicons } from '@expo/vector-icons';
// responsive font imports
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

const Header = () => {
  return (
    <SafeAreaView style = {styles.headerContainer}>
        {/* Menu Bar Icon */}
      {/* <TouchableOpacity><Entypo name="menu" size={30} color="black" /></TouchableOpacity> */}
      <TouchableOpacity><Image 
      source={MenuBar}
      style = {styles.headerMenu}
      /></TouchableOpacity>

      {/* Page Name Text */}
      <Text style = {styles.headerText}>Home</Text>

      {/* Notification Icon */} 
      <TouchableOpacity><Ionicons name="notifications-outline" size={24} color="#0D0D0D" /></TouchableOpacity>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer : {
        marginVertical : '10%' , 
        marginHorizontal : '5%' , 
        flexDirection : 'row' , 
        justifyContent : 'space-between' , 
        alignItems : 'center'
    } , 
    headerText : {
        fontSize : responsiveScreenFontSize(2.5) , 
        fontWeight : "bold" , 
        color : '#0D0D0D' , 
    } , 
    headerMenu : {
      width : 30 ,
      height : 20 , 
    }
})