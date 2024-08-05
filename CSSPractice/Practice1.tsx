import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
const Practice1 = () => {
  const [value, setValue] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        start={{ x: 0.3, y: 1 }}
        end={{ x: 1, y: 0.1 }}
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
    </View>
  );
};

export default Practice1;

const styles = StyleSheet.create({
  container: {
    width: wp(30),
    height: hp(20),

    borderCurve: "continuous",
    direction: "rtl",
    flexDirection: "row",
    borderWidth: 1,
    margin: 5,
    backfaceVisibility: "hidden",
    writingDirection: "rtl",
  },
  mainContainer: {
    backgroundColor: "red",
    width: wp(100),
    height: hp(30),

    flexDirection: "row",
  },
  background: {
    position: "static",
    width: 400,
    borderRadius: 150,
    height: 300,
  },
});
