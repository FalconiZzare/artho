import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, ScrollView, Image } from "react-native";
import { NAV_THEME } from "@/lib/constants";
import Icon from "@/assets/icon.png";

const Index = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image source={Icon} className="mb-6 h-[250px] w-full max-w-[300px]" resizeMode="contain" />

        <ActivityIndicator animating={true} color="#000" size="large" className={"mt-6"} />

        {/*<StatusBar backgroundColor={NAV_THEME.dark.border} style="light" />*/}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
