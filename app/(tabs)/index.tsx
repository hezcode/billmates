import Dashboard from "@/components/base_components/Dashboard";
import FriendsListComponents from "@/components/base_components/FriendsListComponents";
import RecentSplits from "@/components/base_components/RecentSplits";
import { ThemedView } from "@/components/themed-view";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
    >
      <ThemedView
        style={[styles.container, { paddingBottom: insets.bottom + 90 }]}
      >
        <Dashboard />
        <FriendsListComponents />
        <RecentSplits />
      </ThemedView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
