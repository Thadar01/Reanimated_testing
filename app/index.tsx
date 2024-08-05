import { View, Text, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import ReanimatedTest from "@/components/ReanimatedTest";
import ComponentsDisplay from "@/components/ComponentsDisplay";
import ReanimatedTest2 from "@/components/ReanimatedTest2";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HandleGesture from "@/components/HandleGesture";
import GesturewithDecay from "@/components/GesturewithDecay";
import AnimationWithTiming from "@/components/AnimationWithTiming";
import NavigatorWithAnimation from "@/components/NavigatorWithAnimation";
import Tutorial1 from "@/AnimatedFromYT/Tutorial1";
import Practice1 from "@/CSSPractice/Practice1";
import Tutorial2 from "@/AnimatedFromYT/Tutorial2";
import Tutorial3 from "@/AnimatedFromYT/Tutorial3";
import Tutorial4 from "@/AnimatedFromYT/Tutorial4";
import Tutorial5 from "@/AnimatedFromYT/SlowAppear";
import SlowAppear from "@/AnimatedFromYT/SlowAppear";

const index = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
        <SlowAppear />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default index;
