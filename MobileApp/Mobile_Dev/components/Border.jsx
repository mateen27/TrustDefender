import {StyleSheet,Text,View} from 'react-native'
import { Image } from 'react-native';

const Options=()=>{
  
    return(
        <View style={{marginTop:0}}>
            <Text style={{fontSize:15,marginHorizontal:25,marginBottom:5}}>NEARBY</Text>
      <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
      <Text style={styles.container}></Text>
      <Text style={styles.container}></Text>
      <Text style={styles.container}></Text>
      <Text style={styles.container}></Text>
      <Text style={{marginHorizontal:27,width:50}}>WHERE AM I?</Text>
      <Text style={{marginHorizontal:10,width:50}}>POLICE STATION</Text>
      <Text style={{marginHorizontal:23}}>HOSPITALS</Text>
      <Text style={{marginHorizontal:19}}>PETROL</Text>
      
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
      />
       <Image
        source={require('../images/police.png')}
        style={{width: 47,height: 45,marginHorizontal:111, borderRadius:19,marginTop:-45,}}
      />
       <Image
        source={require('../images/medical2.jpg')}
        style={{width: 47,height: 47,marginHorizontal:201, borderRadius:19,marginTop:-45,}}
      />
      <Image
        source={require('../images/nearby.webp')}
        style={{width: 47,height: 47,marginHorizontal:290, borderRadius:19,marginTop:-47,}}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    fontSize:10,
    marginHorizontal:19.85,
    backgroundColor:'#fff',
    borderWidth:1.5,
    borderRadius:9,
    height:50,
    width:50
  },
  photo: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'flex-start',
  },
  image: {
    width: 47,
    height: 45,
    resizeMode: 'contain', 
    marginTop:50,
    marginHorizontal:21.30,
    borderRadius:19
  }
});

export default Options;