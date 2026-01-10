import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
  descriptors,
}) => {
  const theme = useColorScheme();
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const iconColor = isFocused ? "#f97317" : "#000";
        const iconSize = isFocused ? 24 : 28;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.name,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <TouchableOpacity
            style={[
              styles.tabBarButton,
              { backgroundColor: isFocused ? "#fff" : "#transparent" },
            ]}
            key={route.name}
            onPress={onPress}
          >
            {label.toString().toLowerCase() === "home" ? (
              <MaterialIcons name="home" size={iconSize} color={iconColor} />
            ) : label.toString().toLowerCase() === "splits" ? (
              <MaterialIcons
                name="receipt-long"
                size={iconSize}
                color={iconColor}
              />
            ) : label.toString().toLowerCase() === "friends" ? (
              <MaterialIcons
                name="people-alt"
                size={iconSize}
                color={iconColor}
              />
            ) : null}
            {isFocused && (
              <Text
                style={[
                  styles.tabBarText,
                  {
                    color: iconColor,
                  },
                ]}
              >
                {" "}
                {label.toString()}{" "}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#e5e7ebf7",
    backdropFilter: "blur(10px)",
    position: "absolute",
    bottom: 32,
    left: 16,
    right: 16,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    boxShadow: "0px 4px 6px rgba(2, 5, 23, 0.2)",
    borderColor: "#d1d5db",
    borderWidth: 1,
  },
  tabBarButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  tabBarText: {
    fontFamily: "InterMedium",
    fontSize: 16,
  },
});
