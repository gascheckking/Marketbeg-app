// app/(tabs)/_layout.tsx
import { Tabs, router } from 'expo-router';
import { Platform, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: '#555',
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={20} color={color} />
          ),
        }}
      />

      {/* SELL – override tabBarButton (RÄTT sätt) */}
      <Tabs.Screen
        name="sell"
        options={{
          tabBarButton: () => (
            <Pressable
              onPress={() => router.push('/(tabs)/sell')}
              style={styles.sellButton}
            >
              <Ionicons name="add" size={22} color="#000" />
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: theme.colors.bg,
    borderTopColor: theme.colors.border,
    height: Platform.OS === 'ios' ? 58 : 52,
    paddingBottom: Platform.OS === 'ios' ? 10 : 6,
  },

  sellButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? -6 : -4,
  },
});