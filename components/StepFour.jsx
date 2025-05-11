import React from "react";
import { Text, View } from "react-native";
import { Label } from "@/components/ui/label";
import { CloudUpload } from "@/lib/icons/CloudUpload";
import { Camera } from "@/lib/icons/Camera";
import { OTPInput } from "input-otp-native";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
  useSharedValue
} from "react-native-reanimated";
import { cn } from "@/lib/utils";
import BackContinue from "@/components/BackContinue";

const StepFour = ({ onPress, onBackPress }) => {
  return (
    <View
      className={"my-6 rounded-xl bg-white shadow-lg shadow-black"}
      style={{
        padding: 16
      }}
    >
      <Text className={"mb-6 text-2xl font-bold"}>Verification</Text>

      <Label className={"mb-2 font-medium text-foreground/60"}>NID Front Side</Label>
      <UploadBox />

      <Label className={"mb-2 font-medium text-foreground/60"}>NID Back Side</Label>
      <UploadBox />

      <Label className={"mb-2 font-medium text-foreground/60"}>Take Selfie</Label>
      <View
        className={
          "mb-1 flex items-center justify-center rounded-xl border border-foreground/10 bg-gray-100 px-4 py-8"
        }
      >
        <View className={"rounded-full bg-gray-200 p-8"}>
          <Camera className={"text-foreground/70"} size={36} />
        </View>
        <View className={"mt-10 flex flex-row items-center justify-center gap-4"}>
          <Camera className={"text-[#00a651]"} />
          <Text className={"text-xl font-bold text-[#00a651]"}>Capture Photo</Text>
        </View>
      </View>
      <Label className={"mb-6 text-xs text-foreground/60"}>
        Used for facial recognition verification
      </Label>

      <Label className={"native:text-xl text-foreground/60"}>OTP Verification</Label>
      <Label className={"text-foreground/60"}>
        Enter the 6-digit code sent to your mobile number
      </Label>
      <OTPInput
        maxLength={6}
        render={({ slots }) => (
          <View className="my-4 flex-1 flex-row items-center justify-center">
            <View className="flex-row">
              {slots.slice(0, 3).map((slot, idx) => (
                <Slot key={idx} {...slot} index={idx} />
              ))}
            </View>
            <FakeDash />
            <View className="flex-row">
              {slots.slice(3).map((slot, idx) => (
                <Slot key={idx} {...slot} index={idx} />
              ))}
            </View>
          </View>
        )}
      />
      <Text className={"mb-8 text-center text-xl font-bold text-[#00a651]"}>Resend Code</Text>

      <BackContinue onPress={onPress} onBackPress={onBackPress} />
    </View>
  );
};

const UploadBox = () => {
  return (
    <View
      className={
        "mb-6 flex items-center justify-center rounded-xl border-2 border-dashed border-foreground/10 px-4 py-8"
      }
    >
      <CloudUpload className={"text-[#00a651]"} size={32} />
      <Text className={"mt-3 text-xl text-foreground/50"}>Click to upload or drag & drop</Text>
      <Text className={"mt-2 text-base text-foreground/50"}>JPG, PNG or PDF (Max: 5MB)</Text>
    </View>
  );
};

function Slot({ char, isActive, hasFakeCaret, index }) {
  const isFirst = index === 0;
  const isLast = index === 2;
  return (
    <View
      className={cn(
        `h-12 w-12 items-center justify-center bg-gray-50`,
        "border border-foreground/30",
        {
          "rounded-r-lg": isLast,
          "rounded-l-lg": isFirst,
          "border-foreground/30 bg-white": isActive
        }
      )}
    >
      {char !== null && <Text className="text-2xl font-medium text-gray-900">{char}</Text>}
      {hasFakeCaret && <FakeCaret />}
    </View>
  );
}

function FakeDash() {
  return (
    <View className="w-8 items-center justify-center">
      <View className="h-0.5 w-2 rounded-sm bg-foreground" />
    </View>
  );
}

function FakeCaret() {
  const opacity = useSharedValue(1);

  React.useEffect(() => {
    opacity.value = withRepeat(
      withSequence(withTiming(0, { duration: 500 }), withTiming(1, { duration: 500 })),
      -1,
      true
    );
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }));

  const baseStyle = {
    width: 2,
    height: 32,
    backgroundColor: "#00a651",
    borderRadius: 1
  };

  return (
    <View className="absolute h-full w-full items-center justify-center">
      <Animated.View style={[baseStyle, animatedStyle]} />
    </View>
  );
}

export default StepFour;
