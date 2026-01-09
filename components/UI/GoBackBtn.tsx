import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";

const GoBackBtn = () => {
  const theme = useColorScheme();
  return (
    <View
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
    </View>
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
