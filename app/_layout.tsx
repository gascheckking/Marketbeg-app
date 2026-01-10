// ─────────────────────────────────────────────
// app/_layout.tsx
// Root Layout – KARMA shell
// ─────────────────────────────────────────────

import { Tabs } from 'expo-router';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function KarmaHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>KARMA∞</Text>
      <Text style={styles.tagline}>Instant Liquid Economy</Text>
    </View>
  );
}

export default function RootLayout() {
  return (
    <View style={styles.root}>
      <KarmaHeader />

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#0bbf8a',
          tabBarInactiveTintColor: '#777',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Hem',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size ?? 22} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/search"
          options={{
            title: 'Köp',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="search-outline"
                size={size ?? 22}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/sell"
          options={{
            title: 'Sälj',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="add-circle"
                size={size ?? 28}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/profile"
          options={{
            title: 'Profil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-outline"
                size={size ?? 22}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0b0b0f',
  },

  header: {
    paddingTop: Platform.OS === 'ios' ? 54 : 28,
    paddingBottom: 14,
    alignItems: 'center',
    backgroundColor: '#0b0b0f',
    borderBottomWidth: 1,
    borderBottomColor: '#1c1c22',
  },
  logo: {
    fontSize: 22,
    fontWeight: '900',
    color: '#ffffff',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 12,
    color: '#0bbf8a',
    marginTop: 2,
  },

  tabBar: {
    backgroundColor: '#0b0b0f',
    borderTopColor: '#1c1c22',
    height: Platform.OS === 'ios' ? 86 : 64,
    paddingBottom: Platform.OS === 'ios' ? 22 : 10,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '600',
  },
});