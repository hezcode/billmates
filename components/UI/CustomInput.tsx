import React, { useState } from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldValues,
  Path,
} from "react-hook-form";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import { ThemedText } from "../themed-text";

type CustomInputProps<T extends FieldValues> = {
  label: string;
  type: KeyboardTypeOptions;
  placeholder: string;
  name: Path<T>; //Path is used to enforce valid field names
  control: Control<T>;
  required: boolean;
  error: FieldError | undefined;
};

const CustomInput = <T extends FieldValues>({
  label,
  type,
  placeholder,
  name,
  control,
  required,
  error,
}: CustomInputProps<T>) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const borderColor =
    isFocused && !error
      ? "#000"
      : isFocused && error
      ? "red"
      : !isFocused && !error
      ? "#c9c9c9"
      : !isFocused && error
      ? "red"
      : undefined;
  return (
    <View style={{ gap: 8 }}>
      <ThemedText style={{ fontFamily: "InterMedium", fontSize: 18 }}>
        {label}
      </ThemedText>
      <Controller
        control={control}
        rules={{
          required: required,
        }}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: borderColor,
              fontSize: 16,
              fontFamily: "InterRegular",
              paddingHorizontal: 12,
              paddingVertical: 24,
              borderRadius: 16,
            }}
            placeholder={placeholder}
            keyboardType={type}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            onFocus={() => setIsFocused}
          />
        )}
        name={name}
      />
      {error?.message ? (
        <ThemedText type="error" lightColor="red">
          {error?.message}
        </ThemedText>
      ) : null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({});
