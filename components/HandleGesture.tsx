import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming} from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'


const HandleGesture = () => {
    const pressed=useSharedValue<boolean>(false)

    const offset=useSharedValue<number>(0);
    // const yset=useSharedValue<number>(0)
     
    const pan=Gesture.Pan()
    .onBegin(()=>{
        pressed.value=true
    })
    .onChange((event)=>{
        offset.value=event.translationX
        // yset.value=event.absoluteY
    })
    .onFinalize(()=>{
        offset.value=withSpring(0)
        // yset.value=withSpring(0)
        pressed.value=false
    })

    const animatedStyle=useAnimatedStyle(()=>({
        transform:[
            {translateX:offset.value},
            // {translateY:yset.value},
            {scale:withTiming(pressed.value? 1.5 :1)},
        ],
        backgroundColor:pressed.value ? "yellow":"pink"
    }))
  return (
 <GestureHandlerRootView style={styles.container}>
    <View style={styles.container}>
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.circle,animatedStyle]}/>
        </GestureDetector>
    </View>
 </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      marginTop:100
    },
    circle: {
      height: 120,
      width: 120,
      backgroundColor: '#b58df1',
      borderRadius: 500,
     cursor:"pointer"
    },
  });
export default HandleGesture