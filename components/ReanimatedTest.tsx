import { View, Text, Button, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";
import { router } from "expo-router";

const ReanimatedTest = () => {
  const width = useSharedValue<number>(100);
  const height = useSharedValue<number>(100);
  const translateX=useSharedValue(0);
  const translateY=useSharedValue(0);




  const handleBigger = () => {
    // width.value = withSpring(width.value + 50);
    // height.value = withSpring(height.value + 50);
    width.value+=50;
    height.value+=50
  };

  const animatedBigger= useAnimatedStyle(() => ({
    
      width: withSpring(width.value, { mass: 2, stiffness: 100, damping: 10 }),
      height: withSpring(height.value, { mass: 2, stiffness: 200, damping: 10 }),
      transform:[{translateX:translateX.value}],
    
  }));
  const handleShake=()=>{
    translateX.value=withSequence(withTiming(300,{duration:2000,easing:Easing.back(2)}),withRepeat(withTiming(250,{duration:1000}),2),withTiming(10,{duration:2000,easing:Easing.bounce}))
  }
  const handleDelay=()=>{
    translateX.value=withSequence(withDelay(1000,withTiming(200,{duration:2000}),),withTiming(10,{duration:2000}))
  }
//   const handleSmaller = () => {
//     width.value = withSpring(width.value - 50);
//     height.value = withSpring(height.value - 50);
//   };

//   const handleTranslateX=()=>{
//     translateX.value=withSpring(translateX.value+50)
//   }
//   const handleReduceTranslateX=()=>{
//     translateX.value=withSpring(translateX.value-50)
//   }
//   const handleTranslateY=()=>{
//     translateY.value=withSpring(translateY.value+50)
//   }
//   const handleReduceTranslateY=()=>{
//     translateY.value=withSpring(translateY.value-50)
//   }
//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Toggle between handleBigger and handleSmaller every 2 seconds
//       setTimeout(handleBigger,1000);
//       setTimeout(handleSmaller, 2000); // Keep the state for 1 sec
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, []); 
  return (
    <SafeAreaView
      style={{
        display: "flex",
        backgroundColor:"black",
        height:"100%"
     
      }}
    >
      <Animated.View
        style={[{backgroundColor:"violet"},animatedBigger]}
      />
      <>
       <Button onPress={handleBigger} title="Click to bigger" />
       <Button onPress={handleShake} title="Shake" />
       <Button onPress={handleDelay} title="Delay" />
       {/*
      <Button onPress={handleSmaller} title="Click to smaller" />
      <Button onPress={handleTranslateX} title="Move Horizontally to front" />
      <Button onPress={handleReduceTranslateX} title="Move Horizontally to back" />
      <Button onPress={handleTranslateY} title="Move Verticelly to down" />
      <Button onPress={handleReduceTranslateY} title="Move Verticelly to up" /> */}
      {/* <Button title="Next page" onPress={()=> router.push("reanimatedTest2")}/> */}
      </>
    </SafeAreaView>
  );
};

export default ReanimatedTest;
