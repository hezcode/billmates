import FriendCard from "@/components/block_components/FriendCard";
import { ThemedView } from "@/components/themed-view";
import friendData from "@/constants/friends.json";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Friends = () => {
  const insets = useSafeAreaInsets();
  return (
    <ThemedView style={{ flex: 1, paddingHorizontal: 16 }}>
      <FlashList
        data={friendData.friends}
        renderItem={({ item }) => (
          <FriendCard name={item.name} profilePicture={item.avatar} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        contentContainerStyle={{
          marginTop: 32,
          paddingBottom: insets.bottom + 90,
        }}
      />
    </ThemedView>
  );
};

export default Friends;

const styles = StyleSheet.create({});
