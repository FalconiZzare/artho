import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { NAV_THEME } from "@/lib/constants";

const AuthLayout = () => {

  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false
          }}
        />
      </Stack>
      <StatusBar backgroundColor={NAV_THEME.dark.background} style="dark" />
    </>
  );
};

export default AuthLayout;
