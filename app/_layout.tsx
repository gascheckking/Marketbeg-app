import { Tabs } from 'expo-router';
import { Platform, Text } from 'react-native';

let Icon: any;

if (Platform.OS === 'web') {
  Icon = ({ label }: { label: string }) => (
    <Text style={{ fontSize: 18 }}>{label}</Text>
  );
} else {
  const { Ionicons } = require('@expo/vector-icons');
  Icon = ({ name, color, size }: any) => (
    <Ionicons name={name} size={size} color={color} />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0066ff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
          height: Platform.OS === 'ios' ? 90 : 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hem',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="🏠" />
              : <Icon name="home-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/sell"
        options={{
          title: 'Sälj',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="📸" />
              : <Icon name="camera-outline" size={32} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/search"
        options={{
          title: 'Sök',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="🔍" />
              : <Icon name="search-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="👤" />
              : <Icon name="person-outline" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}