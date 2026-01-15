import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";
import splitData from "../../constants/splits.json";
import SplitCard from "../UI/SplitCard";
import { ThemedText } from "../themed-text";

const RecentSplits = () => {
  const theme = useColorScheme();
  const splitsToShow = splitData.splits.slice(0, 4);
  const { push } = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ThemedText style={{ fontSize: 20, fontWeight: 500 }}>
          Recent Split
        </ThemedText>
        <Pressable onPress={() => push("/(protected)/(tabs)/splits")}>
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
        </Pressable>
      </View>
      <View style={{ gap: 16 }}>
        {splitsToShow.map((data) => {
          return (
            <SplitCard
              key={data.id}
              id={data.id}
              title={data.title}
              billAmount={data.billAmount}
              billStatus={data.billStatus}
              dateCreated={data.dateCreated}
              participants={data.participants}
            />
          );
        })}
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
    fontFamily: "InterMedium",
  },
});
