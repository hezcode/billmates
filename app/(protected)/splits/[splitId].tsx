import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import splitData from "@/constants/splits.json";
import { jsonImageIterator } from "@/helper/jsonImageIterator";

const SingleSplit = () => {
  const params = useLocalSearchParams<{ splitId: string }>();
  const split = splitData.splits.find((split) => split.id === params.splitId);
  return (
    <ThemedView
      style={{ flex: 1, paddingHorizontal: 16, paddingTop: 32, gap: 16 }}
    >
      {split?.participants.map((person) => {
        return (
          <View key={person.id}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 8,
                paddingVertical: 16,
                borderWidth: 0.5,
                borderRadius: 32,
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
              >
                <Image
                  source={jsonImageIterator(person.avatar)}
                  style={{ width: 48, height: 48 }}
                />
                <ThemedText> {person.name} </ThemedText>
              </View>
              <ThemedText> {person.billedAmount} </ThemedText>
            </View>
          </View>
        );
      })}
    </ThemedView>
  );
};

export default SingleSplit;

const styles = StyleSheet.create({});
