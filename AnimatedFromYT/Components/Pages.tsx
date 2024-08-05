import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
interface PageProps {
  title: string;
  index: number;
  translateX: Animated.SharedValue<number>;
}
const { height, width } = Dimensions.get("window");
const SIZE = width * 0.7;
const Pages: React.FC<PageProps> = ({ title, index, translateX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    const BorderRadius = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, SIZE / 2, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [{ scale }],
      borderRadius: BorderRadius,
    };
  });
  return (
    <View
      style={[
        { backgroundColor: `rgba(0,0,256,0.${index + 2})` },
        styles.pageContainer,
      ]}
    >
      <Animated.View style={[styles.square, rStyle]} />
    </View>
  );
};

export default Pages;
const styles = StyleSheet.create({
  pageContainer: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "rgba(0,0,256,0.4)",
  },
});
