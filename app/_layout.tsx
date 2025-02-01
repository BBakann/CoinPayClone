import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#4364F7" />
      <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#4364F7' },
      }} />
    </>
  );
}
