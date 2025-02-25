import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const TAB_WIDTH=150;
const TABS=['Home','Search','Profile']
const NavigatorWithAnimation = () => {
    const offset=useSharedValue(-TAB_WIDTH);
    
    const animatedStyles=useAnimatedStyle(()=>({
        transform:[{translateX:offset.value}]
    }))

    const handlePress=(tab:string)=>{
        const newOffset=(()=>{
            switch(tab){
                case "Home":
                    return -TAB_WIDTH;
                case "Search":
                    return 0;
                case 'Profile':
                    return TAB_WIDTH;
                default :
                    return -TAB_WIDTH
            }
        })();
        offset.value=withTiming(newOffset)
    }
  return (
    <View style={styles.container}>
        <View style={styles.tabs}>
            {TABS.map((item,i)=>(
                <Pressable
                key={item}
                style={
                    i!== TABS.length-1 ? [styles.tab,styles.divider]:styles.tab
                }
                onPress={()=>handlePress(item)}
                >
                    <Text style={styles.tabLabel}>{item}</Text>
                </Pressable>
            ))}
        </View>
        <Animated.View style={[styles.animatedBorder,animatedStyles]}/>
    </View>
  )
}

export default NavigatorWithAnimation
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      marginTop:100
    },
    tabs: {
      flexDirection: 'row',
    },
    tab: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: TAB_WIDTH,
      backgroundColor:"pink"
    },
    tabLabel: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      
    },
    divider: {
      borderRightWidth: 1,
      borderRightColor: 'red',
    },
    animatedBorder: {
      height: 8,
      width: 64,
      backgroundColor: 'tomato',
      borderRadius: 20,
    },
  });