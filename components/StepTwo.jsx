import React from "react";
import { Text, View } from "react-native";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BackContinue from "@/components/BackContinue";

const StepTwo = ({ onPress, onBackPress }) => {
  return (
    <View
      className={"mt-6 rounded-xl bg-white shadow-lg shadow-black"}
      style={{
        padding: 16
      }}
    >
      <Text className={"mb-6 text-2xl font-bold"}>Contact Details</Text>

      <View className={"mb-6 w-full"}>
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
            <Input placeholder={"Mobile Number"} inputMode={"numeric"} className={"rounded-xl"} />
          </View>
        </View>
        <Label className={"text-xs text-foreground/70"}>
          Must be registered with the NID holder
        </Label>
      </View>

      <View
        className={"mb-6 w-full items-center justify-start rounded-xl"}
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
            placeholder={"Alternative Mobile Number"}
            inputMode={"numeric"}
            className={"rounded-xl"}
          />
        </View>
      </View>

      <BackContinue onPress={onPress} onBackPress={onBackPress} />
    </View>
  );
};

export default StepTwo;
