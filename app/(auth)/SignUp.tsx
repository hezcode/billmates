import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUp = () => {
  const insets = useSafeAreaInsets();
  return (
    <ThemedView
      style={{
        flex: 1,
        paddingTop: insets.top + 32,
        paddingBottom: insets.bottom + 16,
        paddingHorizontal: 16,
      }}
    >
      <View style={{ flex: 1, marginTop: 10 }}>
        <ThemedText style={{ fontSize: 32, lineHeight: 48, fontWeight: 600 }}>
          Let&apos;s Set You Up
        </ThemedText>
        <ThemedText
          style={{ fontFamily: "InterRegular", color: "rgb(2, 6, 23, 0.5)" }}
        >
          Just one step before you start splitting.
        </ThemedText>
      </View>
    </ThemedView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
