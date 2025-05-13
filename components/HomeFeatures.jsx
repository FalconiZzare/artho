import React from "react";
import { Text, View } from "react-native";
import { HOME_FEATURES } from "@/constants/Features";
import { Link } from "expo-router";

const HomeFeatures = () => {
  return (
    <View className={"pl-1.5"}>
      <View className={"flex flex-row"} style={{ gap: 24.5 }}>
        {HOME_FEATURES[0].map((feature, index) => (
          <Link href={feature.href} key={`0${index}`}>
            <View className={"flex items-center justify-center"}>
              <View
                className={"flex items-center justify-center rounded-full"}
                style={{
                  backgroundColor: feature.color,
                  height: 40,
                  width: 40
                }}
              >
                {feature.icon}
              </View>
              <Text className={"mt-1 text-xs font-medium text-primary"}>{feature.title}</Text>
            </View>
          </Link>
        ))}
      </View>
      <View className={"mt-6 flex flex-row"} style={{ gap: 36 }}>
        {HOME_FEATURES[1].map((feature, index) => (
          <Link href={feature.href} key={`0${index}`}>
            <View className={"flex items-center justify-center"}>
              <View
                className={"flex items-center justify-center rounded-full"}
                style={{
                  backgroundColor: feature.color,
                  height: 40,
                  width: 40
                }}
              >
                {feature.icon}
              </View>
              <Text className={"mt-1 text-xs font-medium text-primary"}>{feature.title}</Text>
            </View>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default HomeFeatures;
