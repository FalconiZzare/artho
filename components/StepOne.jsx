import React from "react";
import { Text, View } from "react-native";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DateField from "@/components/DateField";
import { Button } from "@/components/ui/button";

const StepOne = ({ onPress }) => {
  return (
    <View
      className={"mt-6 rounded-xl bg-white shadow-lg shadow-black"}
      style={{
        padding: 16
      }}
    >
      <Text className={"mb-6 text-2xl font-bold"}>Personal Information</Text>
      <Input
        placeholder={"Full Name (as per NID)"}
        className={"mb-6 rounded-xl border-foreground/20"}
      />
      <Input
        placeholder={"Father's/Mother's Name"}
        className={"mb-6 rounded-xl border-foreground/20"}
      />

      <Label className={"mb-2 text-foreground/70"}>Date of Birth</Label>
      <DateField />
      <Input placeholder={"NID Number"} className={"mb-6 rounded-xl border-foreground/20"} />

      <Label className={"mb-2 text-foreground/70"}>NID Issue Date</Label>
      <DateField />

      <Button
        style={{
          backgroundColor: "#00a651",
          height: 56,
          borderRadius: 12,
          flexGrow: 1
        }}
        className={"mb-2 mt-2"}
        onPress={onPress}
      >
        <Text className={"text-xl font-bold text-white"}>Continue</Text>
      </Button>
    </View>
  );
};

export default StepOne;
