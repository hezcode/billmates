import CustomButton from "@/components/UI/CustomButton";
import CustomInput from "@/components/UI/CustomInput";
import ScreenView from "@/components/UI/ScreenView";
import { ThemedText } from "@/components/themed-text";
import createYupSchema from "@/helper/createYupSchema";
import { Link } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SignUpFormValues {
  emailAddress: string;
  password: string;
}

const schema = createYupSchema<SignUpFormValues>(
  yup.object({
    emailAddress: yup
      .string()
      .email("Invalid Email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password format not valid")
      .required("Password is required"),
  })
);
const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SignUpFormValues) => console.log(data);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScreenView>
        <View style={{ flex: 1, marginTop: 10 }}>
          <ThemedText style={{ fontSize: 32, lineHeight: 48, fontWeight: 600 }}>
            Let&apos;s Set You Up
          </ThemedText>
          <ThemedText
            style={{
              fontFamily: "InterRegular",
              color: "rgb(2, 6, 23, 0.5)",
            }}
          >
            Just one step before you start splitting.
          </ThemedText>
          <View style={{ marginTop: 42, gap: 32 }}>
            <CustomInput
              label="Email Address"
              type="email-address"
              placeholder="johndoe@gmail.com"
              name="emailAddress"
              control={control}
              error={errors.emailAddress}
              required
            />
            <CustomInput
              label="Password"
              type="default"
              placeholder="********"
              name="password"
              control={control}
              error={errors.password}
              required
            />
          </View>
          <View
            style={{ marginTop: 36, marginBottom: 24, alignItems: "center" }}
          >
            <CustomButton
              text="Create Account"
              solid
              withoutIcon
              onPressFunc={handleSubmit(onSubmit)}
            />
            <View style={{ flexDirection: "row", marginTop: 16, gap: 8 }}>
              <ThemedText>Existing user?</ThemedText>
              <Link replace asChild href="/(auth)/SignIn">
                <ThemedText style={{ color: "#F87317" }}>Sign in</ThemedText>
              </Link>
            </View>
          </View>
        </View>
      </ScreenView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
