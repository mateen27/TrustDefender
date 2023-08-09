import { FlatList, Image, SafeAreaView, StyleSheet, View, Text , Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

const Carousel = () => {
    // Get Dimensions
  const screenWidth = Dimensions.get('window').width;

  const flatListRef = useRef();

  const [activeIndex , setActiveIndex] = useState(0);

  const data = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1658409313329-081973e2d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1658409313329-081973e2d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1658409313329-081973e2d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1658409313329-081973e2d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80',
    },
  ];

  // Display images UI
  const renderItem = ({ item, index }) => {
    return (
      <SafeAreaView style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={{ width: screenWidth, height: 180 }} resizeMode="cover" />
      </SafeAreaView>
    );
  };

  //Auto scroll feature
  useEffect(() => {
    //if activeIndex === lastIndex --> jump back to the firstIndex
    //else increment by 1 --> activeIndex + 1

    let interval = setInterval(() => {
        //jump back to first index
        if(activeIndex === data.length -1 ){
            flatListRef.current.scrollToIndex({
                index : 0 ,
                animation : true ,
            });
        }
        else {
            flatListRef.current.scrollToIndex({
                index : activeIndex + 1 ,
                animation : true ,
            });
        }
    } , 2000);

    return () => clearInterval(interval);
  });

  //in order to make easy for the flatList by providing the calculations for the scroll else laggy performance
  const getItemLayout = (data , index) => ({
        length: screenWidth ,   //width of the image 
        offset: screenWidth * index , //for first image - 300  * 0 = 0pixels //second 300 * 1 = 300 //third 300 * 2 = 600
        index : index ,
  })

  //handle Scroll function for setting activeIndex
  function handleScroll(event){
    //get scroll position

    //screen width of my device is 360 and scrollPosition as well [depends according to other devices]
    //so what happens when we go from index 1 to index 2 scrollPosition becomes 360 + 360 = 720
    const scrollPosition = event.nativeEvent.contentOffset.x;   //for the x-axis
    // console.log(scrollPosition);

    //get the index of  current active item
    const index = scrollPosition / screenWidth
    // console.log('index' , index);

    //update the index
    setActiveIndex(index);
  }

    // Render dot Indicator
    const renderDotIndicator = () => {
        return (
          <View style={styles.dotContainer}>
            {data.map((dot, index) => (
              activeIndex === index ? (
                <View key={index} style={[styles.dot, styles.activeDot]} />
              ) : (
                <View key={index} style={styles.dot} />
              )
            ))}
          </View>
        );
      };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Help</Text> */}
      <FlatList data={data} renderItem={renderItem} ref={flatListRef} getItemLayout={getItemLayout} keyExtractor={(item)=> item.id} horizontal pagingEnabled onScroll={handleScroll}/>
      {renderDotIndicator()}
    </SafeAreaView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    marginVertical: '5%',
  },
  imageContainer: {
    width: Dimensions.get('window').width,
    height: 180,
  },
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    backgroundColor: 'black',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeDot : {
    backgroundColor: '#fafafafa',
  }
});
