// ─────────────────────────────────────────────
// app/_layout.tsx
// KARMA Root – Spotify-grade navigation
// ─────────────────────────────────────────────

import { Tabs } from 'expo-router';
import { Platform, View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#0bbf8a',
          tabBarInactiveTintColor: '#555',
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
          name="(tabs)/search"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="search-outline" size={22} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/sell"
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.sellButton}>
                <Ionicons name="add" size={26} color="#000" />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="(tabs)/profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={22} color={color} />
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
    paddingTop: Platform.OS === 'ios' ? 42 : 22,
    paddingBottom: 8,
    alignItems: 'center',
    backgroundColor: '#0b0b0f',
    borderBottomWidth: 1,
    borderBottomColor: '#1c1c22',
  },
  logo: {
    fontSize: 18,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 10,
    color: '#0bbf8a',
    marginTop: 2,
  },

  tabBar: {
    backgroundColor: '#0b0b0f',
    borderTopColor: '#1c1c22',
    height: Platform.OS === 'ios' ? 72 : 56,
    paddingBottom: Platform.OS === 'ios' ? 14 : 6,
  },

  sellButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#0bbf8a',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? -6 : -4,
  },
});