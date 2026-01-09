import { SplitDetails } from "@/types/split-details.type";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";

const SplitCard: React.FC<SplitDetails> = ({
  title,
  billAmount,
  billStatus,
  dateCreated,
}) => {
  const theme = useColorScheme();
  return (
    <ThemedView
      lightColor="#ffffff"
      darkColor="rgba(44, 45, 51, 0.6)"
      style={{
        padding: 16,
        gap: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor:
          theme === "light" ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.1)",
        boxShadow:
          theme === "light"
            ? "0px 2px 6px rgba(0, 0, 0, 0.15)"
            : "0px 2px 6px rgba(255, 255, 255, 0.15)",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ThemedText style={styles.billTitle}>{title}</ThemedText>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <ThemedText style={styles.billAmount}>${billAmount}</ThemedText>
          <MaterialIcons
            name="more-vert"
            size={24}
            style={
              {
                //   borderWidth: 1,
              }
            }
            color={theme === "light" ? "#030717" : "#ffffff"}
          />
        </View>
      </View>
      <View></View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <ThemedText style={styles.billStatusContainer}>
          Bill status:{" "}
          <ThemedText
            style={[
              styles.billStatus,
              { color: billStatus === true ? "#23aa04" : "#ff0000" },
            ]}
          >{`${
            billStatus === true ? "Fully settled" : "Not fully settled"
          }`}</ThemedText>
        </ThemedText>
        <ThemedText style={[styles.date, { paddingRight: 8 }]}>
          {dateCreated}
        </ThemedText>
      </View>
    </ThemedView>
  );
};

export default SplitCard;

const styles = StyleSheet.create({
  billTitle: {
    fontFamily: "PoppinsSemiBold",
  },
  billAmount: {
    fontFamily: "GeistSemiBold",
    color: "#f97216",
  },
  date: {
    fontSize: 12,
    fontFamily: "InterMedium",
  },
  billStatusContainer: {
    fontSize: 14,
    fontFamily: "InterRegular",
  },
  billStatus: {
    fontSize: 14,
    fontFamily: "InterMedium",
  },
});
