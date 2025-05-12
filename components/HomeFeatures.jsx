import React from "react";
import { Text, View } from "react-native";
import { HOME_FEATURES } from "@/constants/Features";
import { Link } from "expo-router";

const HomeFeatures = () => {
  return (
    <View>
      <View className={"flex flex-row"} style={{ gap: 22 }}>
        {HOME_FEATURES[0].map((feature, index) => (
          <Link href={feature.href} key={`0${index}`}>
            <View className={"flex items-center justify-center"}>
              <View
                className={"flex items-center justify-center rounded-full"}
                style={{
                  backgroundColor: feature.color,
                  height: 60,
                  width: 60
                }}
              >
                {feature.icon}
              </View>
              <Text className={"mt-1 text-sm font-medium text-primary"}>{feature.title}</Text>
            </View>
          </Link>
        ))}
      </View>
      <View className={"mt-6 flex flex-row"} style={{ gap: 34 }}>
        {HOME_FEATURES[1].map((feature, index) => (
          <Link href={feature.href} key={`0${index}`}>
            <View className={"flex items-center justify-center"}>
              <View
                className={"flex items-center justify-center rounded-full"}
                style={{
                  backgroundColor: feature.color,
                  height: 60,
                  width: 60
                }}
              >
                {feature.icon}
              </View>
              <Text className={"mt-1 text-sm font-medium text-primary"}>{feature.title}</Text>
            </View>
          </Link>
        ))}
      </View>
    </View>
  );
};

export default HomeFeatures;
