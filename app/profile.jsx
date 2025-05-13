import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "@/lib/icons/ArrowLeft";
import { ChevronRight } from "@/lib/icons/ChevronRight";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { EllipsisVertical } from "@/lib/icons/EllipsisVertical";
import { PROFILE_OPTIONS } from "@/constants/ProfileOptions";
import { useUserStore } from "@/store/store.user";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const updateAuth = useUserStore((state) => state.updateAuth);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  const handleLogout = () => {
    updateAuth(false);
    router.push("sign-in");
  };

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/sign-in");
    }
  }, [isAuthenticated]);

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className={"flex flex-row items-center justify-between p-4"}>
          <ArrowLeft className={"text-foreground/80"} size={24} onPress={() => router.back()} />
          <Text className={"font-medium"}>Profile</Text>
          <EllipsisVertical className={"text-foreground/80"} size={24} />
        </View>

        <View className={"px-4"}>
          <View
            className={
              "mb-4 mt-6 flex items-center justify-center rounded-lg bg-background pb-8 shadow-lg shadow-black"
            }
          >
            <View
              className={
                "my-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/70"
              }
            >
              <Text className={"text-xl font-bold text-background"}>N</Text>
            </View>
            <Text className={"text-xl font-bold text-foreground/80"}>Nafiees Ahamed</Text>
            <View className={"mt-6 h-1 w-full bg-foreground/10"} />

            {PROFILE_OPTIONS.map((option, index) =>
              option.isLogout ? (
                <Button
                  key={index}
                  className={"native:px-0 native:py-0 bg-transparent"}
                  onPress={handleLogout}
                >
                  <View
                    className={
                      "mt-5 flex w-full flex-row items-center justify-between border-b border-foreground/10 px-4 py-6"
                    }
                  >
                    <View className={"flex flex-row items-center"}>
                      {option.icon}
                      <Text className={"ml-7 text-lg font-semibold text-foreground/80"}>
                        {option.title}
                      </Text>
                    </View>
                    <ChevronRight className={"text-foreground/60"} size={24} />
                  </View>
                </Button>
              ) : (
                <View key={index}>
                  <View
                    className={
                      "flex w-full flex-row items-center justify-between border-b border-foreground/10 px-4 py-6"
                    }
                  >
                    <View className={"flex flex-row items-center"}>
                      {option.icon}
                      <Text className={"ml-7 text-lg font-semibold text-foreground/80"}>
                        {option.title}
                      </Text>
                    </View>
                    <ChevronRight className={"text-foreground/60"} size={24} />
                  </View>
                </View>
              )
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
