import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../themed-text";

const Header: React.FC<BottomTabHeaderProps> = () => {
  const theme = useColorScheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: insets.top + 12,
        paddingHorizontal: 16,
        paddingBottom: 12,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Image
          source={require("@/assets/images/user_profile.png")}
          style={{ width: 56, height: 56 }}
        />
        <ThemedText
          style={{
            fontFamily: "InterSemiBold",
            fontSize: 18,
          }}
        >
          Good Afternoon, Olga
        </ThemedText>
      </View>
      <MaterialIcons
        name="notifications-none"
        size={28}
        color={theme === "light" ? "#030717" : "#fff"}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
