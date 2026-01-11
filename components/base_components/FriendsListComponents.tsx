import friendList from "@/constants/friends.json";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "../themed-text";

const FriendsListComponents = () => {
  const theme = useColorScheme();
  const { navigate } = useRouter();
  const avatarMap: Record<string, ImageSourcePropType | undefined> = {
    friend_01: require("@/assets/images/friend_01.png"),
    friend_02: require("@/assets/images/friend_02.png"),
    friend_03: require("@/assets/images/friend_03.png"),
    friend_04: require("@/assets/images/friend_04.png"),
    // friend_05: require("@/assets/images/friend_05.png"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <ThemedText style={{ fontSize: 20, fontWeight: 500 }}>
          Friends from contact
        </ThemedText>
        <Pressable onPress={() => navigate("/(protected)/(tabs)/friends")}>
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
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        {friendList.friends.map((friend) => (
          <Image
            key={friend.id}
            source={avatarMap[friend.avatar]}
            style={{ width: 76, height: 76 }}
          />
        ))}
      </View>
    </View>
  );
};

export default FriendsListComponents;

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    paddingHorizontal: 16,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  seeAllText: {
    fontSize: 14,
    fontFamily: "InterMedium",
  },
});
