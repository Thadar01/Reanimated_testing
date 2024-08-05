//Gesture
import { View, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

type ContextType = {
  translateX: number;
};

const SIZE = 100;
const CIRCLERADIUS = SIZE * 2;

const Tutorial2 = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = Gesture.Pan()
    .onStart((event) => {})
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLERADIUS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.circle}>
        <GestureDetector gesture={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default Tutorial2;

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "pink",
    borderRadius: 20,
  },
  circle: {
    width: CIRCLERADIUS * 1.7,
    height: CIRCLERADIUS * 1.7,
    borderWidth: 3,
    borderColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: CIRCLERADIUS,
  },
});
