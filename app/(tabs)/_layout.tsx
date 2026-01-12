// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import { Platform, View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../theme';

export default function TabsLayout() {
  return (
    <>
      {/* TOP BRAND */}
      <View style={styles.header}>
        <Text style={styles.logo}>KARMA∞</Text>
        <Text style={styles.tagline}>Instant Liquid Economy</Text>
      </View>

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
          name="sell"
          options={{
            tabBarIcon: () => (
              <View style={styles.sellButton}>
                <Ionicons name="add" size={26} color="#000" />
              </View>
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
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 42 : 22,
    paddingBottom: 8,
    alignItems: 'center',
    backgroundColor: theme.colors.bg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  logo: {
    fontSize: 18,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 10,
    color: theme.colors.primary,
    marginTop: 2,
  },

  tabBar: {
    backgroundColor: theme.colors.bg,
    borderTopColor: theme.colors.border,
    height: Platform.OS === 'ios' ? 72 : 56,
    paddingBottom: Platform.OS === 'ios' ? 14 : 6,
  },

  sellButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? -6 : -4,
  },
});