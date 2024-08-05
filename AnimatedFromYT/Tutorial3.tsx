//SrollView

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Pages from "./Components/Pages";

const WORDS = ["What;s", "up", "mobile", "devs?"];

const Tutorial3 = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <Animated.ScrollView
      style={styles.container}
      horizontal
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {WORDS.map((title, index) => {
        return (
          <Pages
            key={index.toString()}
            title={title}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default Tutorial3;

const styles = StyleSheet.create({
  container: {
    height: hp(100),
    backgroundColor: "pink",
  },
});
