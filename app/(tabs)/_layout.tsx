import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";

import Header from "@/components/base_components/Header";
import TabBar from "@/components/base_components/TabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="splits"
        options={{
          title: "Splits",
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
        }}
      />
    </Tabs>
  );
}
