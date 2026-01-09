import { Tabs } from 'expo-router';
import { Platform, Text } from 'react-native';
import { theme } from './theme';

let Icon: any;

if (Platform.OS === 'web') {
  Icon = ({ label, color }: { label: string; color: string }) => (
    <Text style={{ fontSize: 16, color }}>{label}</Text>
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
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.muted,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          height: Platform.OS === 'ios' ? 78 : 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: -2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hem',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="🏠" color={color} />
              : <Icon name="home-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/sell"
        options={{
          title: 'Sälj',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="＋" color={color} />
              : <Icon name="add-circle-outline" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/search"
        options={{
          title: 'Köp',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="🔍" color={color} />
              : <Icon name="search-outline" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="👤" color={color} />
              : <Icon name="person-outline" size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}