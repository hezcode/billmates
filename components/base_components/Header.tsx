import splitData from "@/constants/splits.json";
import { useNavigationState } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
import GoBackBtn from "../UI/GoBackBtn";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const insets = useSafeAreaInsets();

  const route = useNavigationState((state) => state.routes[state.index]);
  const params: Readonly<{ splitId?: string } | undefined> = route.params;
  const split = splitData.splits.find((split) => split.id === params?.splitId);

  return (
    <ThemedView>
      <LinearGradient
        colors={["rgb(2, 6, 23, 0.2)", "rgba(44, 45, 51, 0.6)"]}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: insets.top + 24,
          paddingHorizontal: 16,
          paddingBottom: 24,
          borderBottomRightRadius: 32,
          borderBottomLeftRadius: 32,
        }}
      >
        <GoBackBtn />
        <ThemedText
          style={{
            textAlign: "center",
            width: "80%",
            fontFamily: "InterSemiBold",
          }}
        >
          {split?.title || title}
        </ThemedText>
      </LinearGradient>
    </ThemedView>
  );
};

export default Header;

const styles = StyleSheet.create({});
