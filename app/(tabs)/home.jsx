import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CircleUserRound } from "@/lib/icons/CircleUserRound";
import { Bell } from "@/lib/icons/Bell";
import { Link } from "expo-router";
import { Eye } from "@/lib/icons/Eye";
import { cn } from "@/lib/utils";
import { EyeOff } from "@/lib/icons/EyeOff";
import HomeFeatures from "@/components/HomeFeatures";
import HomeCarousel from "@/components/HomeCarousel";
import HomePlans from "@/components/HomePlans";

const Home = () => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <SafeAreaView className="h-full" style={{ overflow: "hidden" }}>
      <ScrollView>
        <View className={"relative"}>
          <View
            className={"absolute rounded-full bg-primary"}
            style={{
              height: 400,
              width: "100%",
              borderRadius: 200,
              marginTop: -320,
              transform: [{ scale: 1.6 }]
            }}
          />

          <View className={"flex flex-row items-center justify-between p-6"}>
            <Link href={"/profile"}>
              <View className={"flex flex-row items-center gap-2"}>
                <CircleUserRound className={"text-background"} size={32} />
                <Text className={"font-normal text-background"}>Nafiees</Text>
              </View>
            </Link>
            <Bell className={"text-background"} size={32} />
          </View>

          <Text className={"mt-1 text-center text-xl font-normal text-background"}>
            Current Balance
          </Text>
          <View className={"mt-2 flex flex-row items-center justify-center gap-2"}>
            <View className={"flex flex-row items-center justify-center gap-4"}>
              <Text
                className={"mb-2 font-bold text-background"}
                style={{ transform: [{ scale: 2.7 }] }}
              >
                ৳
              </Text>
              <Text
                className={cn("text-5xl font-bold text-background", !showBalance && "leading-none")}
              >
                {showBalance ? "95,000" : "******"}
              </Text>
            </View>
            {showBalance ? (
              <EyeOff
                className={"mb-1 text-background"}
                size={24}
                onPress={() => setShowBalance(false)}
              />
            ) : (
              <Eye
                className={"mb-1 text-background"}
                size={24}
                onPress={() => setShowBalance(true)}
              />
            )}
          </View>
        </View>

        <View style={{ marginTop: 65 }} className={"px-4"}>
          <HomeFeatures />
          <HomeCarousel />
          <HomePlans />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
