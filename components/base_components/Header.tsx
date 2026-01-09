import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../themed-text";
import GoBackBtn from "../UI/GoBackBtn";

const Header = () => {
  const theme = useColorScheme();
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={["rgb(2, 6, 23, 0.2)", "rgba(44, 45, 51, 0.6)"]}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: insets.top + 24,
        paddingHorizontal: 16,
        paddingBottom: 24,

        borderBottomRightRadius: 32,
        borderBottomLeftRadius: 32,
      }}
    >
      <GoBackBtn />
      <ThemedText style={{ textAlign: "center", width: "80%" }}>
        All Splits
      </ThemedText>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({});
