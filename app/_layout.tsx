import { Tabs } from 'expo-router';
import { Platform, View, Text, StyleSheet } from 'react-native';
import { theme } from './theme';

let Icon: any;
if (Platform.OS === 'web') {
  Icon = ({ label }: { label: string }) => <Text style={{ fontSize: 18 }}>{label}</Text>;
} else {
  const { Ionicons } = require('@expo/vector-icons');
  Icon = ({ name, color, size }: any) => (
    <Ionicons name={name} size={size} color={color} />
  );
}

function KarmaHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>KARMA∞</Text>
      <Text style={styles.tagline}>Prylar ut · Pengar in</Text>
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
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.muted,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Hem',
            tabBarIcon: ({ color }) =>
              Platform.OS === 'web'
                ? <Icon label="🏠" />
                : <Icon name="home-outline" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="(tabs)/sell"
          options={{
            title: 'Sälj',
            tabBarIcon: ({ color }) =>
              Platform.OS === 'web'
                ? <Icon label="＋" />
                : <Icon name="add-circle-outline" size={26} color={color} />,
          }}
        />
        <Tabs.Screen
          name="(tabs)/search"
          options={{
            title: 'Köp',
            tabBarIcon: ({ color }) =>
              Platform.OS === 'web'
                ? <Icon label="🔍" />
                : <Icon name="search-outline" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="(tabs)/profile"
          options={{
            title: 'Profil',
            tabBarIcon: ({ color }) =>
              Platform.OS === 'web'
                ? <Icon label="👤" />
                : <Icon name="person-outline" size={22} color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.colors.bg },
  header: {
    paddingTop: Platform.OS === 'ios' ? 54 : 28,
    paddingBottom: 14,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  logo: {
    color: theme.colors.text,
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 1,
  },
  tagline: {
    color: theme.colors.primary,
    fontSize: 12,
    marginTop: 4,
  },
  tabBar: {
    backgroundColor: theme.colors.bg,
    borderTopColor: theme.colors.border,
    height: Platform.OS === 'ios' ? 86 : 64,
    paddingBottom: Platform.OS === 'ios' ? 22 : 10,
  },
});