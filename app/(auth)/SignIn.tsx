import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";
import { StyleSheet } from "react-native";

const SignIn = () => {
  return (
    <ThemedView>
      <ThemedText>Letaquo;s Set You Up</ThemedText>
      <ThemedText>Just one step before you start splitting.</ThemedText>
    </ThemedView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
