import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../../assets/tab_icon/home.png")}
              style={{ width: size, height: size, tintColor: "#0E100F" }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="habits"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../../assets/tab_icon/habits.png")}
              style={{ width: size, height: size, tintColor: "#0E100F" }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="challenges"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../../assets/tab_icon/challenges.png")}
              style={{ width: size, height: size, tintColor: "#0E100F" }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="journey"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../../assets/tab_icon/shared_journey.png")}
              style={{ width: size, height: size, tintColor: "#0E100F" }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../../assets/tab_icon/diary.png")}
              style={{ width: size, height: size, tintColor: "#0E100F" }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Image
              source={require("../../assets/tab_icon/profile.png")}
              style={{ width: size, height: size, tintColor: "#0E100F" }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
