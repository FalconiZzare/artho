import React, { useEffect, useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, ScrollView, Image } from "react-native";
import Logo from "@/assets/logo.png";
import { useUserStore } from "@/store/store.user";

const Index = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const [isNavigationReady, setIsNavigationReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavigationReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isNavigationReady) {
        if (isAuthenticated) {
          router.replace("/home");
        } else {
          router.replace("/sign-in");
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAuthenticated, isNavigationReady]);

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
        <Image source={Logo} className="mb-6 h-[250px] w-full max-w-[300px]" resizeMode="contain" />

        <ActivityIndicator animating={true} color="#000" size="large" className="mt-6" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
