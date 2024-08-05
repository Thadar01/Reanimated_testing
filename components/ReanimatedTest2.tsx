import React from "react";
import { View, Text, Button } from "react-native";
import { Svg } from "react-native-svg";
import Animated, {
    Easing,
  ReduceMotion,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Circle, CircleProps } from "react-native-svg";
import { transform } from "@babel/core";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const AnimatedCircle = Animated.createAnimatedComponent<CircleProps>(Circle);

const ReanimatedTest2 = () => {
  const radius = useSharedValue<number>(20);
  const translateX=useSharedValue<number>(0)
  const pressed=useSharedValue<boolean>(false)
  const fill=useSharedValue<string>("black")

  const tap=Gesture.Tap()
  .onBegin(()=>{
    pressed.value=true
    fill.value="blue"
  })
  .onFinalize(()=>{
    pressed.value=false
    fill.value="black"
  })

  const handleCircleLarge = () => {
    radius.value -=10;
  };

  const handleCircleSmall = () => {
    radius.value +=10;
  };

//   const animatedProps = useAnimatedProps(() => ({
//     r: withTiming(radius.value,{duration:800,easing:Easing.bounce}),
//   transform:[{translsteX:translateX.value}]
//   }));
  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(radius.value, { duration: 800, easing: Easing.bounce }),
    transform: [{ translateX: translateX.value }],
    fill: fill.value,
  }));

  const hanldeClick=()=>{
    translateX.value=withRepeat(withTiming(40),5,true)
  }
  return (
    <View>
        <GestureDetector gesture={tap}>
        <Svg style={{ height: 200 }}>
        <AnimatedCircle
          cx={50}
          cy={50}
         
          animatedProps={animatedProps}
        
        />
      </Svg>
        </GestureDetector>
    
      <Text>Hello</Text>
      <Button title="Click to large" onPress={handleCircleLarge} />
      <Button title="Click to small" onPress={handleCircleSmall} />
    </View>
  );
};

export default ReanimatedTest2;
