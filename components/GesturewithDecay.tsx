import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';

const SIZE=120;

const GesturewithDecay = () => {
    const offset=useSharedValue(0)
    const width=useSharedValue(0)

    const onLayout=(event:any)=>{
        width.value=event.nativeEvent.layout.width
    }

    const pan =Gesture.Pan()
    .onChange((event)=>{
        offset.value+=event.changeX;
    })
    .onFinalize((event)=>{
        offset.value=withDecay({
            velocity:event.velocityX,
            rubberBandEffect:true,
            clamp:[-(width.value)+SIZE/2,width.value/2-SIZE/2]
        })
    })
    const animatedStyles=useAnimatedStyle(()=>({
        transform:[{translateX:offset.value}]
    }))
  return (
   <GestureHandlerRootView  style={styles.container}>
    <View onLayout={onLayout} style={styles.container}>
        <GestureDetector gesture={pan}>
            <Animated.View style={[styles.box,animatedStyles]}/>
        </GestureDetector>
    </View>
   </GestureHandlerRootView>
  )
}

export default GesturewithDecay
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        marginTop:100
    },
    wrapper:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    box:{
        height:SIZE,
        width:SIZE,
        backgroundColor:"#b58df1",
        borderRadius:20,
        cursor:"pointer",
        alignItems:"center",
        justifyContent:"center"
    }
})