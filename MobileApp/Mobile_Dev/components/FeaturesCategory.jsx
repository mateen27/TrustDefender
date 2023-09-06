import {
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";

const FeaturesCategory = ({ color, name, iconName, bgColor }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[
          styles.circle,
          { borderColor: '#000' , backgroundColor: bgColor },
        ]}
      >
        <View style={styles.iconContainer}>
          <FontAwesome5
            name={iconName}
            size={22}
            color={color}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.productName}>{name}</Text>
    </SafeAreaView>
  );
};

export default FeaturesCategory;

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Center content horizontally
  },
  circle: {
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 4,
    marginBottom: "3%",
    marginVertical: "7%",
    position: "relative",
    alignItems: "center", // Center content horizontally
  },
  productName: {
    fontSize: responsiveFontSize(1.6),
    textAlign: "center",
    width: responsiveScreenWidth(20),
    fontWeight: "bold",
    textAlign: "center",
    color : '#ffffff'
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
