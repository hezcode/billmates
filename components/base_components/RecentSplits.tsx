import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import SplitCard from "../block_components/SplitCard";
import { ThemedText } from "../themed-text";

const RecentSplits = () => {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ThemedText style={{ fontSize: 20, fontWeight: 500 }}>
          Recent Split
        </ThemedText>
        <ThemedText
          style={[
            styles.seeAllText,
            {
              color:
                theme === "light"
                  ? "rgb(2, 6, 23, 0.5)"
                  : "rgb(255, 255, 255, 0.5)",
            },
          ]}
        >
          see all
        </ThemedText>
      </View>
      <View style={{ gap: 16 }}>
        <SplitCard />
        <SplitCard />
      </View>
    </View>
  );
};

export default RecentSplits;

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  seeAllText: {
    fontSize: 14,
  },
});
