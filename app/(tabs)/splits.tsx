import SplitCard from "@/components/block_components/SplitCard";
import splitData from "@/constants/splits.json";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SplitScreen = () => {
  const splits = splitData.splits;
  const inset = useSafeAreaInsets();
  return (
    <View style={styles.pageContainer}>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={splits}
        renderItem={({ item }) => (
          <SplitCard
            billAmount={item.billAmount}
            billStatus={item.billStatus}
            title={item.title}
            dateCreated={item.dateCreated}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        contentContainerStyle={{
          marginTop: 32,
          paddingBottom: inset.bottom + 90,
        }}
      />
    </View>
  );
};

export default SplitScreen;

const styles = StyleSheet.create({
  pageContainer: { flex: 1, paddingHorizontal: 16 },
});
