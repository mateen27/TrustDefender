import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
// responsive font imports
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";

const Greeting = () => {
  return (
    <SafeAreaView style = {styles.greetingContainer}>
      <Text style = {styles.userName}>Hi, Mateen!</Text>
      <Text style = {styles.greetingSubheading}>Good Morning</Text>
    </SafeAreaView>
  )
}

export default Greeting

const styles = StyleSheet.create({
    greetingContainer : {
        flexDirection : 'column' , 
        marginHorizontal : 25 , 
        marginVertical : -10
    } , 
    userName : {
        fontSize : responsiveScreenFontSize(2.6) , 
        fontWeight : '700' , 
        color : '#ffffff'
    } , 
    greetingSubheading : {
        fontWeight : '200' , 
        color : '#ced6e0'
    }
})