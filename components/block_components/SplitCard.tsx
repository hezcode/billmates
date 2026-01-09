import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const SplitCard = () => {
  const theme = useColorScheme();
  const fullSettled = false;
  return (
    <ThemedView
      lightColor="#ffffff"
      darkColor="rgba(44, 45, 51, 0.6)"
      style={{
        padding: 16,
        gap: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor:
          theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1)",
        boxShadow:
          theme === "light"
            ? "0px 2px 6px rgba(0, 0, 0, 0.15)"
            : "0px 2px 6px rgba(255, 255, 255, 0.15)",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ThemedText>Hangout to Mac Donalds</ThemedText>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <ThemedText>$45.00</ThemedText>
          <MaterialIcons
            name="more-vert"
            size={24}
            color={theme === "light" ? "#030717" : "#ffffff"}
          />
        </View>
      </View>
      <View></View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ThemedText>
          Bill status:{" "}
          {`${fullSettled ? "Fully settled" : "Not fully settled"}`}
        </ThemedText>
        <ThemedText>$15.00</ThemedText>
      </View>
    </ThemedView>
  );
};

export default SplitCard;

const styles = StyleSheet.create({});
