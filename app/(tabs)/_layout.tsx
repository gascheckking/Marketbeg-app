// app/(tabs)/_layout.tsx
import { Tabs, router } from 'expo-router';
import { Platform, StyleSheet, Pressable, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: '#6b6b70',
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="auction"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="hammer-outline" size={22} color={color} />
          ),
        }}
      />

      {/* SELL – primary */}
      <Tabs.Screen
        name="sell"
        options={{
          tabBarButton: () => (
            <View style={styles.sellWrap}>
              <Pressable
                onPress={() => router.push('sell')}
                style={styles.sellButton}
              >
                <Ionicons name="add" size={26} color="#000" />
              </Pressable>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="trade"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="swap-horizontal-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
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
    height: Platform.OS === 'ios' ? 60 : 54,
    paddingBottom: Platform.OS === 'ios' ? 10 : 6,
  },

  sellWrap: {
    top: -8,
  },

  sellButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
});