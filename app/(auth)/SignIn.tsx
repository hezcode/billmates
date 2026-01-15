import CustomButton from "@/components/UI/CustomButton";
import CustomInput from "@/components/UI/CustomInput";
import ScreenView from "@/components/UI/ScreenView";
import { ThemedText } from "@/components/themed-text";
import { Link } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

const SignIn = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScreenView>
        <ThemedText style={{ fontSize: 32, lineHeight: 48, fontWeight: 600 }}>
          Welcome Back!
        </ThemedText>
        <View style={{ marginTop: 42, gap: 32 }}>
          <CustomInput
            label="Email Address"
            type="email-address"
            placeholder="johndoe@gmail.com"
          />
          <CustomInput label="Password" type="default" placeholder="********" />
        </View>
        <View style={{ marginTop: 36, marginBottom: 24, alignItems: "center" }}>
          <CustomButton text="Sign in" solid withoutIcon />
          <View style={{ flexDirection: "row", marginTop: 16, gap: 8 }}>
            <ThemedText>Don&apos;t have an account?</ThemedText>
            <Link replace asChild href="/(auth)/SignUp">
              <ThemedText style={{ color: "#F87317" }}>Sign up</ThemedText>
            </Link>
          </View>
        </View>
      </ScreenView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
