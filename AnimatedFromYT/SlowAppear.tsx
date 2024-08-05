//Slow apeare feom the border
import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { heightPercentageToDP } from "react-native-responsive-screen";

const SlowAppear = () => {
  const width = useSharedValue(0);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);
  const boxOpacity = useSharedValue(0);
  const color = useSharedValue("white");
  const [press, setPress] = useState(false);
  const [show, setShow] = useState(false);
  const deg = useSharedValue("0deg");
  const rounded = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      borderColor: color.value,
    };
  });
  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: deg.value }],
      borderRadius: rounded.value,
    };
  });
  const handleLarge = () => {
    setPress(!press);
    if (press) {
      // Collapse the view and then hide the text
      width.value = withTiming(0, { duration: 1500 });
      height.value = withTiming(0, { duration: 1500 });
      opacity.value = withTiming(0, { duration: 300 });
      color.value = withTiming("white", { duration: 1500 });
    } else {
      // Expand the view and then show the text
      width.value = withTiming(250, { duration: 1000 });
      height.value = withTiming(100, { duration: 1000 }, () => {
        // Animate opacity after the view has expanded
        opacity.value = withTiming(1, { duration: 500 });
      });
      color.value = "black";
    }
  };
  // // const handleAppear = () => {
  // //   setShow(!show);
  // //   if (show) {
  // //     boxOpacity.value = withTiming(0, { duration: 1000 });
  // //   } else {
  // //     boxOpacity.value = withTiming(1, { duration: 1000 });
  // //   }
  // };
  const handelRotate = () => {
    setShow(!show);
    if (show) {
      deg.value = withTiming("0deg", { duration: 2000 });
      rounded.value = withTiming(0, { duration: 2000 });
    } else {
      deg.value = withRepeat(
        withTiming("360deg", { duration: 2000 }),
        withTiming(0, { duration: 2000 })
      );

      rounded.value = withRepeat(
        withTiming(100, { duration: 2000 }),
        withTiming(0, { duration: 2000 })
      );
    }
  };
  return (
    <View>
      <Button title="Press" onPress={handleLarge} />
      <Button title="Press here to appear" onPress={handelRotate} />
      <Animated.View
        style={[
          {
            borderWidth: 1,
            borderColor: "black",

            alignItems: "center",
            margin: 10,
          },
          rStyle,
        ]}
      >
        <Animated.Text style={{ opacity }}>
          These trends indicate a dynamic fashion landscape in Myanmar,
          influenced by both global movements and a deep appreciation for local
          culture and sustainability.
        </Animated.Text>
      </Animated.View>
      <Animated.View
        style={[
          {
            backgroundColor: "lightblue",
            width: 100,
            height: 100,
            margin: 10,
          },
          rotateStyle,
        ]}
      />
    </View>
  );
};

export default SlowAppear;
const styles = StyleSheet.create({});
