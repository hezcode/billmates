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

interface SignInProps {
  emailAddress: string;
  password: string;
}

const schema = createYupSchema<SignInProps>(
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

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SignInProps) => console.log(data);

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
            control={control}
            name="emailAddress"
            required
            error={errors.emailAddress}
          />
          <CustomInput
            label="Password"
            type="default"
            placeholder="********"
            control={control}
            name="password"
            required
            error={errors.password}
          />
        </View>
        <View style={{ marginTop: 36, marginBottom: 24, alignItems: "center" }}>
          <CustomButton
            onPressFunc={handleSubmit(onSubmit)}
            text="Sign in"
            solid
            withoutIcon
          />
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
