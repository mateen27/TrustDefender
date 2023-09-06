import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FeaturesCategory from "./FeaturesCategory";
import { FontAwesome5 } from '@expo/vector-icons';


const Features = () => {
  const featuresData = [
    {
      id: 1,
      color: "#ffffff",
      name : 'Where Am I?' ,
      iconName: "map-pin", // Name of the FontAwesome5 icon
      bgColor : '#333'
    },
    {
      id: 2,
      color: "#ffffff",
      name : 'Record' ,
      iconName : "record-vinyl" , 
      bgColor : '#333'
    },
    {
      id: 3,
      color: "#ffffff",
      name : 'Track Me' ,
      iconName : "location-arrow" , 
      bgColor : '#333'
    },
    { 
      id: 4,
      color: "#ffffff" , 
      name : 'Helpline' ,
      iconName : 'phone' ,
      bgColor : '#333'
    },
  ];

  return (
    <SafeAreaView style={styles.circularContainer}>
      {
        featuresData.map((features) => (
          <FeaturesCategory key = {features.id} color = {features.color} name = {features.name} iconName={features.iconName} bgColor = {features.bgColor}/>
        ))
      }
    </SafeAreaView>
  );
};

export default Features;

const styles = StyleSheet.create({
  circularContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: '2%',
    marginVertical: '3%',
    justifyContent: "space-evenly",
  },
});
