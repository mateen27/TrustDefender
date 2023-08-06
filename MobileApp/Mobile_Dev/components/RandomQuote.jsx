import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
// importing quote icon
import { FontAwesome } from '@expo/vector-icons';

const RandomQuote = () => {
  return (
    <>
    <SafeAreaView style = {styles.quoteContainer}>
      <Text style = {styles.quoteHeading}>RandomQuote</Text>
    </SafeAreaView>
    <FontAwesome name="quote-left" size={24} color="black" style = {styles.leftQuote} />
    <FontAwesome name="quote-right" size={24} color="black" style = {styles.rightQuote} />
    </>
  )
}

export default RandomQuote

const styles = StyleSheet.create({
    quoteContainer : {
        backgroundColor : '#538FFB' , 
        marginVertical : '6%' , 
        borderRadius : 10 , 
        height : '17%' ,
        margin : 25 , 
        justifyContent: 'center', // Align content vertically center
        alignItems: 'center', // Align content horizontally center
        position: 'relative', // Add position: 'relative' to enable absolute positioning of the icon
    } , 
    quoteHeading : {
        color : '#fafafa' , 
        // textAlign : 'center' , 
    } , 
    leftQuote : {
        marginHorizontal : '8%' , 
        // left: '3%',
        top: '21%',
        position: 'absolute', // Set position to absolute to place the icon freely over the container
    } ,
    rightQuote : {
        marginHorizontal : '8%' , 
        right: '-12%',
        top: '38%',
        position: 'absolute', // Set position to absolute to place the icon freely over the container
    }
})