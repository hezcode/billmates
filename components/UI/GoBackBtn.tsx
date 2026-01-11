import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";

const GoBackBtn = () => {
  const theme = useColorScheme();
  const { back } = useRouter();
  return (
    <Pressable
      onPress={() => back()}
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#fff" : "#030717" },
      ]}
    >
      <MaterialIcons
        name="arrow-back"
        size={24}
        color={theme === "light" ? "#030717" : "#fff"}
      />
    </Pressable>
  );
};

export default GoBackBtn;

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100%",
  },
});
