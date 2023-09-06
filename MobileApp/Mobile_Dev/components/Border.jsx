import {StyleSheet,Text,View} from 'react-native'
import { Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
// responsive font imports
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Options=()=>{

    return(
        <View style={{marginTop:10}}>
            <Text style={{fontSize:15,marginHorizontal:25,marginBottom:5 , justifyContent :'space-between' , fontWeight : 'bold' ,  }}>NEARBY</Text>
        <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
        <Text style={styles.container}></Text>
        <Text style={styles.container}></Text>
        <Text style={styles.container}></Text>
        <Text style={styles.container}></Text>
        <Text style={styles.boxText}>WHERE AM I?</Text>
        <Text style={styles.boxText}>POLICE STATION</Text>
        <Text style={styles.boxText}>HOSPITALS</Text>
        <Text style={styles.boxText}>PETROL</Text>
      
      </View>
      <Pic/>
        
        </View>
    );
}

const Pic = () => {
  return (
    <View style={styles.photo}>
      <Image
        source={require('../images/map.jpeg')}
        style={styles.image}
        resizeMode='cover'
      />
       <Image
        source={require('../images/police.png')}
        style={styles.image}
        resizeMode='cover'
      />
       <Image
        source={require('../images/medical2.jpg')}
        style={styles.image}
        resizeMode='cover'
      />
      <Image
        source={require('../images/nearby.webp')}
        style={styles.image}
        resizeMode='cover'
      />
    </View>
  );
};


const styles = StyleSheet.create({
  photo: {
    flex: 1,
    flexDirection : 'row' ,
    justifyContent: 'space-between',
    alignItems:'center',
  },
  image: {
    width: responsiveScreenWidth(11),
    height: responsiveScreenHeight(6),
    resizeMode: 'contain', 
    marginTop:'14%',
    justifyContent : 'space-between' ,
    marginHorizontal : '7%' ,
    borderRadius:20
  }, 
  container: {
    marginHorizontal: '5.5%',
    justifyContent: 'center', // Center vertically
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(16),
    alignItems: 'center', // Center horizontally
  },
  // ... other styles
  boxText: {
    marginHorizontal: '2.7%',
    textAlign: 'center',
    width : responsiveScreenWidth(19.6) , 
    alignItems : 'center' , 
    fontSize : responsiveScreenFontSize(1.6) , 
    fontWeight : 'bold'
  },
});

export default Options;