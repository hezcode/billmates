import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedView } from "../themed-view";

interface ScreenViewProps {
  children: React.ReactNode;
}

const ScreenView: React.FC<ScreenViewProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <ThemedView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingTop: insets.top + 32,
          paddingBottom: insets.bottom + 16,
          paddingHorizontal: 16,
        }}
      >
        {children}
      </ScrollView>
    </ThemedView>
  );
};

export default ScreenView;

const styles = StyleSheet.create({});
