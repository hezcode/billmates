import FriendsListComponents from "@/components/base_components/FriendsListComponents";
import RecentSplits from "@/components/base_components/RecentSplits";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const HomeScreen = () => {
  const theme = useColorScheme();
  return (
    <ScrollView>
      <ThemedView style={styles.container}>
        <LinearGradient
          colors={["rgb(2, 6, 23, 0.2)", "rgba(44, 45, 51, 0.6)"]}
          style={styles.dashboardContainer}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
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
          <View style={{ marginTop: 18, gap: 8 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <ThemedText
                lightColor="#000000bf"
                darkColor="#ffffffbc"
                style={{ fontSize: 14, lineHeight: 20 }}
              >
                Rank
              </ThemedText>
              <Text>🎖️</Text>
            </View>
            <ThemedText
              lightColor="#000000e3"
              darkColor="#fff"
              style={{
                fontSize: 18,
                fontWeight: "700",
                lineHeight: 20,
                fontFamily: "InterBold",
              }}
            >
              Billmate Rookie
            </ThemedText>
          </View>
          <View
            style={{
              marginTop: 24,
              width: "100%",
              height: 180,
              backgroundColor: "rgb(255, 255, 255, 0.5)",
              borderRadius: 32,
              padding: 16,
              borderWidth: 1,
              borderColor: "rgba(0, 0, 0, 0.3)",
              boxShadow:
                theme === "light"
                  ? "0px 2px 6px rgba(0, 0, 0, 0.15)"
                  : "0px 2px 6px rgba(255, 255, 255, 0.15)",
              justifyContent: "space-between",
            }}
          >
            <View>
              <ThemedText lightColor="#000000e3" darkColor="rgba(0, 0,0, 0.7)">
                Total Amount Splitted
              </ThemedText>
              <ThemedText type="bigNumbers" style={{ color: "#f97216" }}>
                $825.00
              </ThemedText>
            </View>
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <View>
                <ThemedText
                  lightColor="#000000e3"
                  darkColor="rgba(0, 0,0, 0.7)"
                >
                  Expense
                </ThemedText>
                <ThemedText type="bigNumbers" style={{ color: "#020617" }}>
                  $300.00
                </ThemedText>
              </View>
              <View>
                <ThemedText
                  lightColor="#000000e3"
                  darkColor="rgba(0, 0,0, 0.7)"
                >
                  Unsettled Bill
                </ThemedText>
                <ThemedText type="bigNumbers" style={{ color: "#020617" }}>
                  $500.00
                </ThemedText>
              </View>
            </View>
          </View>
        </LinearGradient>
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
  dashboardContainer: {
    width: "100%",
    height: 420,
    borderBottomEndRadius: 32,
    borderBottomStartRadius: 32,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
});
