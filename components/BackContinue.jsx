import React from "react";
import { Button } from "@/components/ui/button";
import { Text, View } from "react-native";

const BackContinue = ({ onPress, onBackPress, name = "Continue" }) => {
  return (
    <View className={"mb-2 flex w-full flex-row justify-between gap-6"}>
      <Button
        className={"flex-1"}
        style={{
          height: 50,
          borderRadius: 12,
          backgroundColor: "#F15A29"
        }}
        onPress={onBackPress}
      >
        <Text className={"text-lg font-semibold text-white"}>Back</Text>
      </Button>
      <Button
        className={"flex-1"}
        style={{
          height: 50,
          borderRadius: 12,
          backgroundColor: "#00a651"
        }}
        onPress={onPress}
      >
        <Text className={"text-lg font-semibold text-white"}>{name}</Text>
      </Button>
    </View>
  );
};

export default BackContinue;
