import Header from "@/components/base_components/Header";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="splits/[splitId]"
        options={{ headerShown: true, header: () => <Header /> }}
      />
    </Stack>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
