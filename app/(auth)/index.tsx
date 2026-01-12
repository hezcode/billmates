import CustomButton from "@/components/block_components/CustomButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const insets = useSafeAreaInsets();
  const { navigate } = useRouter();
  return (
    <ImageBackground
      source={require("@/assets/images/onboarding_bg.jpg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <LinearGradient
        locations={[0.1, 0.7]}
        colors={["rgb(228, 232, 235, 0.8)", "rgba(2, 6, 23, 0.95)"]}
        style={{ flex: 1 }}
      >
        <View
          style={{
            borderWidth: 1,
            flex: 1,
            paddingTop: insets.top + 32,
            paddingBottom: insets.bottom + 16,
          }}
        >
          <View
            style={{
              marginTop: "auto",
            }}
          >
            <Image
              source={require("@/assets/images/billmate_logo.png")}
              style={{
                width: 140,
                height: 58,
                alignSelf: "center",
                marginBottom: 24,
              }}
            />
            <Text
              style={{
                textAlign: "center",
                fontFamily: "InterBold",
                fontSize: 24,
                color: "#fff",
              }}
            >
              Split every expenses with friends and keep everything in sync
            </Text>
            <View
              style={{
                alignItems: "center",
                gap: 16,
                marginTop: 40,
              }}
            >
              <CustomButton
                icon={<MaterialIcons name="email" size={24} color="#fff" />}
                text="Sign up with email"
                solid
                onPressFunc={() => navigate("/(auth)/SignUp")}
              />
              <CustomButton
                icon={<MaterialIcons name="apple" size={24} color="#fff" />}
                text="Sign up with Apple"
              />
              <CustomButton
                icon={<MaterialIcons name="email" size={24} color="#fff" />}
                text="Sign up with Google"
              />
              <CustomButton
                icon={<MaterialIcons name="facebook" size={24} color="#fff" />}
                text="Sign up with Facebook"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
