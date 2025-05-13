import React from "react";
import { Text, View } from "react-native";
import { HOME_FEATURES } from "@/constants/Features";
import { Link } from "expo-router";

const HomeFeatures = () => {
  return (
    <View className={"flex items-center justify-center"}>
      <Text>Hello</Text>
      <View className={"flex w-full flex-row items-center justify-around pl-2"}>
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
      <View className={"mt-6 flex w-full flex-row items-center justify-around"}>
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
