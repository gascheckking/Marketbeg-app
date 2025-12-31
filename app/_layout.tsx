// app/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hem',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/sell"
        options={{
          title: 'Sälj',
          tabBarIcon: ({ color }) => <Ionicons name="camera" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/search"
        options={{
          title: 'Sök',
          tabBarIcon: ({ color }) => <Ionicons name="search" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
