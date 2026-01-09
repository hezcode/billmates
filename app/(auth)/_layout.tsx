import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="SignIn" options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
