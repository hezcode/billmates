import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import splitData from "@/constants/splits.json";

const SingleSplit = () => {
  const params = useLocalSearchParams<{ splitId: string }>();
  const split = splitData.splits.find((split) => split.id === params.splitId);
  return (
    <View>
      <Text> {split?.title} </Text>
    </View>
  );
};

export default SingleSplit;

const styles = StyleSheet.create({});
