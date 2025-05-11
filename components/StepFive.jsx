import React, { useState } from "react";
import { Text, View } from "react-native";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { EyeOff } from "@/lib/icons/EyeOff";
import { Eye } from "@/lib/icons/Eye";
import { Info } from "@/lib/icons/Info";
import { CircleCheckBig } from "@/lib/icons/CircleCheckBig";
import BackContinue from "@/components/BackContinue";

const StepFive = ({ onPress, onBackPress }) => {
  const [showPin, setShowPin] = useState(false);
  const [showConfirmPin, setConfirmShowPin] = useState(false);

  return (
    <View
      className={"my-6 rounded-xl bg-white shadow-lg shadow-black"}
      style={{
        padding: 16
      }}
    >
      <Text className={"mb-6 text-2xl font-bold"}>Set PIN</Text>

      <Label className={"native:text-xl mb-2 font-normal text-foreground/50"}>
        Create 4-digit PIN
      </Label>
      <Label className={"mb-6 font-normal text-foreground/50"}>
        This PIN will be used for accessing your account and authorizing transactions
      </Label>
      <View classNaame={"relative"}>
        <Input
          placeholder={"••••"}
          className={"mb-6 mt-1 rounded-xl"}
          maxLength={4}
          inputMode={"numeric"}
          secureTextEntry={!showPin}
          autoCapitalize="none"
          autoCorrect={false}
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

      <Label className={"native:text-xl mb-2 font-normal text-foreground/50"}>Confirm PIN</Label>
      <View classNaame={"relative"}>
        <Input
          placeholder={"••••"}
          className={"mb-6 mt-1 rounded-xl"}
          maxLength={4}
          inputMode={"numeric"}
          secureTextEntry={!showConfirmPin}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {showConfirmPin ? (
          <EyeOff
            className={"absolute right-3 top-3.5 text-foreground"}
            onPress={() => setConfirmShowPin(false)}
          />
        ) : (
          <Eye
            className={"absolute right-3 top-3.5 text-foreground"}
            onPress={() => setConfirmShowPin(true)}
          />
        )}
      </View>

      <View className={"mb-6 rounded-xl bg-gray-200 p-4"}>
        <View className={"mb-4 flex flex-row gap-4"}>
          <Info className={"text-[#00a651]"} />
          <Text className={"text-xl"}>PIN Security</Text>
        </View>
        {INFO.map((info, index) => (
          <View className={"mb-2 flex flex-row gap-4"} key={index}>
            <CircleCheckBig className={"mt-1 text-[#00a651]"} />
            <Text className={"text-lg text-foreground/60"} style={{ maxWidth: 280 }}>
              {info}
            </Text>
          </View>
        ))}
      </View>

      <BackContinue name={"Complete"} onBackPress={onBackPress} onPress={onPress} />
    </View>
  );
};

const INFO = [
  "Use a PIN that's easy for you to remember but hard for others to guess",
  "Avoid using sequential numbers (e.g., 1234) or repeating digits (e.g., 1111)",
  "Never share your PIN with anyone, including bank representatives"
];

export default StepFive;
