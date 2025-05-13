import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ImageBackground, Image, ScrollView, StyleSheet } from "react-native";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fingerprint } from "@/lib/icons/Fingerprint";
import { Link } from "expo-router";
import { useUserStore } from "@/store/store.user";
import { toast } from "sonner-native";
import { router } from "expo-router";
import { Eye } from "@/lib/icons/Eye";
import { EyeOff } from "@/lib/icons/EyeOff";

const SignIn = () => {
  const updateAuth = useUserStore((state) => state.updateAuth);
  const [number, setNumber] = useState("");
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);

  const handleSignIn = () => {
    if (number !== "01701122336" || pin !== "6688") {
      toast.error("Invalid credentials");
    } else {
      updateAuth(true);
      router.push("/home");
    }
  };

  const handleFingerPrint = () => {
    toast.success("Fingerprint authenticated");
    const timer = setTimeout(() => {
      updateAuth(true);
      router.push("/home");
    }, 2000);

    return () => clearTimeout(timer);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/background.png")}
      style={styles.fullScreenBackground}
    >
      <SafeAreaView className="h-full">
        <ScrollView>
          <View className={"flex w-full items-center justify-center px-8"}>
            <Image
              source={Logo}
              className="h-[250px] w-full"
              style={{ maxWidth: 220 }}
              resizeMode="contain"
            />
            <Text className={"-mt-12 mb-4 text-4xl font-bold"}>
              Welcome to&nbsp;
              <Text style={{ color: "#00a651" }}>Artho</Text>
            </Text>
            <Text className={"mb-8 text-center text-[22px] tracking-wide text-foreground/75"}>
              Your trusted financial partner in Bangladesh
            </Text>
            <Text
              className={"mb-8 text-center text-xl font-semibold tracking-wide text-foreground/90"}
            >
              Sign In To Your Account.
            </Text>

            <View className={"mb-4 w-full"}>
              <View
                className={"w-full items-center justify-start rounded-xl"}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: "#e8e8e8"
                }}
              >
                <Text style={{ paddingRight: 8, paddingLeft: 8 }} className={"text-lg"}>
                  +880
                </Text>
                <View style={{ flexGrow: 1 }}>
                  <Input
                    placeholder={"Mobile Number"}
                    inputMode={"numeric"}
                    className={"rounded-xl"}
                    onChangeText={(e) => setNumber(e)}
                  />
                </View>
              </View>
              <Label className={"text-xs text-foreground/70"}>For testing, use: 01701122336</Label>
            </View>

            <View className={"mb-4 w-full"}>
              <Label className={"mb-1 text-3xl text-foreground/80"} style={{ fontSize: 16 }}>
                4-Digit PIN
              </Label>
              <View classNaame={"relative"}>
                <Input
                  placeholder={"••••"}
                  className={"mt-1 rounded-xl"}
                  maxLength={4}
                  inputMode={"numeric"}
                  secureTextEntry={!showPin}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onChangeText={(e) => setPin(e)}
                />
                {showPin ? (
                  <EyeOff
                    className={"absolute right-3 top-3.5 text-foreground"}
                    onPress={() => setShowPin(false)}
                  />
                ) : (
                  <Eye
                    className={"absolute right-3 top-3.5 text-foreground"}
                    onPress={() => setShowPin(true)}
                  />
                )}
              </View>
              <Label className={"text-xs text-foreground/70"}>For testing, use: 6688</Label>
            </View>

            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                marginBottom: 10
              }}
            >
              <Button
                style={{
                  backgroundColor: "#00a651",
                  height: 56,
                  borderRadius: 12,
                  flexGrow: 1
                }}
                onPress={handleSignIn}
              >
                <Text className={"text-xl font-bold text-white"}>Sign In</Text>
              </Button>
              <Button
                style={{
                  backgroundColor: "rgba(0, 166, 81, 0.12)",
                  height: 56,
                  width: 80,
                  borderRadius: 12
                }}
                onPress={handleFingerPrint}
              >
                <Fingerprint style={{ color: "rgba(0, 166, 81, 0.9)" }} />
              </Button>
            </View>

            <Text className={"text-xl text-foreground/70"}>
              Don't have an account?&nbsp;
              <Link href={"/sign-up"}>
                <Text className={"font-bold"} style={{ color: "#00a651" }}>
                  Sign Up
                </Text>
              </Link>
            </Text>

            <Text className={"mb-4 text-xl font-bold"} style={{ color: "#00a651" }}>
              Forgot Pin
            </Text>
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

export default SignIn;
