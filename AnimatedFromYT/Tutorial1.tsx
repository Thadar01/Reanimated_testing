//Rotate
import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Tutorial1 = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const handleRotate = (progress: any) => {
    "worklet";
    return `${progress.value * 2 * Math.PI}rad`;
  };
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotate(progress) }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 3, true);
    scale.value = withRepeat(withSpring(1), 3, true);
  }, []);
  return (
    <View style={styles.constainer}>
      <Animated.View
        style={[
          {
            height: hp(15),
            width: wp(28),
            backgroundColor: "lightblue",
          },
          reanimatedStyle,
        ]}
      />
    </View>
  );
};

export default Tutorial1;
const styles = StyleSheet.create({
  constainer: {
    height: hp(100),
    alignItems: "center",
    justifyContent: "center",
  },
});
