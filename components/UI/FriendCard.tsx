import { jsonImageIterator } from "@/helper/jsonImageIterator";
import { Friend } from "@/types/friend.type";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";
import { ThemedText } from "../themed-text";

const FriendCard: React.FC<Friend> = ({ name, profilePicture }) => {
  const theme = useColorScheme();
  const [avatar, setAvatar] = useState<ImageSourcePropType>();
  useEffect(() => {
    const avatarLink = jsonImageIterator(profilePicture);
    setAvatar(avatarLink);
  }, [profilePicture]);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        paddingVertical: 16,
        borderBottomColor: "rgb(0,0,0 ,0.2)",
      }}
    >
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Image source={avatar} style={{ width: 48, height: 48 }} />
          <ThemedText style={{ fontFamily: "InterSemiBold" }}>
            {name}
          </ThemedText>
        </View>
        <MaterialIcons
          name="more-vert"
          size={24}
          color={theme === "light" ? "#030717" : "#ffffff"}
        />
      </View>
    </View>
  );
};

export default FriendCard;

const styles = StyleSheet.create({});
