import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Construction } from "@/lib/icons/Construction";

const UnderConstruction = () => {
  return (
    <SafeAreaView className="h-full">
      <View className={"flex h-full items-center justify-center"}>
        <Construction className={"text-red-500"} size={90} />
        <Text className={"mt-10 text-2xl font-semibold text-foreground/80"}>
          Feature Under Construction!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UnderConstruction;
