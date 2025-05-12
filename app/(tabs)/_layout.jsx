import React, { useEffect } from "react";
import { router, Tabs } from "expo-router";
import { useUserStore } from "@/store/store.user";
import { House } from "@/lib/icons/House";
import { ScanQrCode } from "@/lib/icons/ScanQrCode";
import { Gift } from "@/lib/icons/Gift";
import { StatusBar } from "expo-status-bar";

const TabsLayout = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#c1c1c7",
          tabBarShowLabel: false,
          tabBarStyle: {
            borderColor: "transparent",
            height: 60,
            paddingTop: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        }}
      >
        <Tabs.Screen
          name={"home"}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => <House color={color} size={34} />
          }}
        />

        <Tabs.Screen
          name={"scan"}
          options={{
            title: "ScanQRCode",
            headerShown: false,
            tabBarIcon: ({ color }) => <ScanQrCode color={color} size={34} />
          }}
        />

        <Tabs.Screen
          name={"gift"}
          options={{
            title: "Gift",
            headerShown: false,
            tabBarIcon: ({ color }) => <Gift color={color} size={34} />
          }}
        />

        <Tabs.Screen
          name="expenses"
          options={{
            headerShown: false,
            href: null
          }}
        />

        <Tabs.Screen
          name="under-construction"
          options={{
            headerShown: false,
            href: null
          }}
        />
      </Tabs>
      <StatusBar style="dark" />
    </>
  );
};

export default TabsLayout;
