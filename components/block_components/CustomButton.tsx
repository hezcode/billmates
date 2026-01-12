import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";

interface CustomButtonProps {
  text: string;
  icon?: React.ReactNode;
  solid?: boolean;
  onPressFunc?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon,
  solid,
  onPressFunc,
}) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        gap: 24,
        width: 320,
        borderWidth: 1,
        paddingHorizontal: 32,
        paddingVertical: 18,
        borderRadius: 32,
        borderColor: solid ? "#030717" : "#fff",
        backgroundColor: solid ? "#030717" : "transparent",
      }}
      onPress={onPressFunc}
    >
      {icon}
      <ThemedText
        style={{ fontFamily: "InterSemiBold", fontSize: 18, color: "#fff" }}
      >
        {text}
      </ThemedText>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
