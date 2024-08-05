import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

const AnimationWithTiming = () => {
    const offset=useSharedValue(200);

    const animatedStyle=useAnimatedStyle(()=>({
        transform:[{translateX:offset.value}]
    }))

    useEffect(()=>{
        offset.value=withRepeat(
            withTiming(-offset.value,{duration:1500}),-1,true
        )
    },[]);
  return (
    <View style={styles.container}>
        <Animated.View style={[styles.box,animatedStyle]}/>
    </View>
  )
}

export default AnimationWithTiming
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      marginTop:100
    },
    box: {
      height: 120,
      width: 120,
      backgroundColor: '#b58df1',
      borderRadius: 20,
    },
  });