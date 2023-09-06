import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ShakeFeature from '../features/ShakeFeature';
import Header from '../components/Header';
import RandomQuote from '../components/RandomQuote';
import Greeting from '../components/Greeting';
import Carousel from '../components/Carousel';
import Options from '../components/Border';
import BottomNavigation from '../components/BottomBar';
import LoginUI from '../components/LoginUI'
import LoginDetailUI from '../components/LoginDetail'
import SignupUI from '../components/SignUp'
import MapFeature from '../features/MapFeature';
import Features from '../components/Features';

export default function Main() {
  return (
    <>
      <ShakeFeature/>
      <SafeAreaView style={styles.container}>

        <Header/>

       <Greeting/>

        {/* <RandomQuote/> */}

        {/* <Options/> */}
        
        <Features/>

        <Carousel/>
        

        {/* <BottomNavigation/> */}

        {/* <LoginUI/> */}

        {/* <LoginDetailUI/> */}

        {/* <SignupUI/> */}

        {/* <MapFeature/> */}
        
        <StatusBar style="light" />

      </SafeAreaView>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1 ,
    backgroundColor: '#000000', //F4F4F4  //#2d3436 1 //#F1F1F1 //#2f3542 3  //#2f3640 2   //#1e272e 4   #333 5
  },
});