import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Calculator" }} />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
