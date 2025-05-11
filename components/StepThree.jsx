import React from "react";
import { Text, View } from "react-native";
import BackContinue from "@/components/BackContinue";

const StepThree = ({ onPress, onBackPress }) => {
  return (
    <View
      className={"mt-6 rounded-xl bg-white shadow-lg shadow-black"}
      style={{
        padding: 16
      }}
    >
      <Text className={"mb-6 text-2xl font-bold"}>Account Type</Text>

      <View
        className={
          "mb-6 flex flex-row items-start justify-start gap-4 rounded-2xl border border-[#00a651] bg-[rgba(0,166,81,0.05)] p-4"
        }
      >
        <View
          className={"flex items-center justify-center rounded-full border-2 border-[#00a651]"}
          style={{
            marginTop: 4,
            height: 24,
            width: 24
          }}
        >
          <View
            className={"rounded-full bg-[#00a651]"}
            style={{
              height: 16,
              width: 16
            }}
          />
        </View>
        <View>
          <Text className={"mb-2 text-xl font-semibold"}>Personal Account</Text>
          <Text className={"text-base font-medium text-foreground/50"}>
            Standard account for individuals
          </Text>
        </View>
      </View>

      <DisabledOption
        title={"Business Account"}
        description={"For business entities (requires in-person verification)"}
      />
      <DisabledOption
        title={"Agent Account"}
        description={"For authorized agents (requires in-person verification)"}
      />

      <BackContinue onPress={onPress} onBackPress={onBackPress} />
    </View>
  );
};

const DisabledOption = ({ title, description }) => {
  return (
    <View
      className={
        "mb-6 flex flex-row items-start justify-start gap-4 rounded-2xl border border-foreground/10 p-4"
      }
    >
      <View
        className={"flex items-center justify-center rounded-full border-2 border-foreground/20"}
        style={{
          marginTop: 4,
          height: 24,
          width: 24
        }}
      ></View>
      <View>
        <Text className={"mb-2 text-xl font-semibold text-foreground/40"}>{title}</Text>
        <Text className={"text-base font-medium text-foreground/30"} style={{ maxWidth: 280 }}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default StepThree;
