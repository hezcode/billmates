import React from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "../themed-text";

interface CustomInputProps {
  label: string;
  type: KeyboardTypeOptions;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <View style={{ gap: 8 }}>
      <ThemedText style={{ fontFamily: "InterMedium", fontSize: 18 }}>
        {label}
      </ThemedText>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#c9c9c9",
          fontSize: 16,
          fontFamily: "InterRegular",
          paddingHorizontal: 12,
          paddingVertical: 24,
          borderRadius: 16,
        }}
        placeholder={placeholder}
        keyboardType={type}
      ></TextInput>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
