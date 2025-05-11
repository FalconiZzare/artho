import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ImageBackground, StyleSheet, ScrollView, Image } from "react-native";
import { Progress } from "@/components/ui/progress";
import Logo from "@/assets/logo.png";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import StepFour from "@/components/StepFour";
import StepFive from "@/components/StepFive";
import { toast } from "sonner-native";
import { router } from "expo-router";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    if (step <= 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleComplete = () => {
    toast.success("Account created successfully!");
    const timer = setTimeout(() => {
      router.push("/sign-in");
    }, 1000);

    return () => clearTimeout(timer);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      style={styles.fullScreenBackground}
    >
      <SafeAreaView className="h-full">
        <ScrollView>
          <View
            className={"w-full"}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#00a651",
              paddingRight: 24,
              paddingLeft: 24,
              paddingTop: 16,
              paddingBottom: 16
            }}
          >
            <View>
              <Text className={"text-3xl font-bold text-white"}>Artho</Text>
              <Text className={"text-lg font-medium text-white"}>Create your account</Text>
            </View>
            <View
              className={"relative"}
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={Logo}
                className={"absolute"}
                style={{ maxWidth: 50, height: 40, width: 40 }}
                resizeMode="contain"
              />
            </View>
          </View>
          <View className={"px-4"}>
            <View className={"mb-1 mt-6 flex flex-row justify-between"}>
              <Text className={"text-lg font-bold text-foreground/80"}>{`Step ${step} of 5`}</Text>
              <Text className={"text-lg font-bold text-[#00a651]"}>{`${(step / 5) * 100}%`}</Text>
            </View>
            <Progress
              value={step * 20}
              className={"shadow-inner bg-gray-200"}
              indicatorClassName={"bg-[#00a651]"}
            />

            {step === 1 && <StepOne onPress={handleContinue} />}
            {step === 2 && <StepTwo onPress={handleContinue} onBackPress={handleBack} />}
            {step === 3 && <StepThree onPress={handleContinue} onBackPress={handleBack} />}
            {step === 4 && <StepFour onPress={handleContinue} onBackPress={handleBack} />}
            {step === 5 && <StepFive onPress={handleComplete} onBackPress={handleBack} />}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fullScreenBackground: {
    flex: 1,
    width: "100%",
    height: "100%"
  }
});

export default SignUp;
