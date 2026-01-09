import { Tabs } from 'expo-router';
import { Platform, Text, View, StyleSheet } from 'react-native';

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
    <Tabs
      screenOptions={{
        header: () => <KarmaHeader />,
        tabBarActiveTintColor: '#0bbf8a',
        tabBarInactiveTintColor: '#777',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Hem',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="🏠" />
              : <Icon name="home-outline" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="(tabs)/sell"
        options={{
          title: 'Sälj',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="＋" />
              : <Icon name="add-circle-outline" size={28} color={color} />,
        }}
      />

      <Tabs.Screen
        name="(tabs)/search"
        options={{
          title: 'Köp',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="🔍" />
              : <Icon name="search-outline" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="(tabs)/profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) =>
            Platform.OS === 'web'
              ? <Icon label="👤" />
              : <Icon name="person-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 54 : 32,
    paddingBottom: 14,
    alignItems: 'center',
    backgroundColor: '#0b0b0f',
    borderBottomWidth: 1,
    borderBottomColor: '#1c1c22',
  },
  logo: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 12,
    color: '#0bbf8a',
    marginTop: 4,
  },
  tabBar: {
    backgroundColor: '#0b0b0f',
    borderTopColor: '#1c1c22',
    height: Platform.OS === 'ios' ? 88 : 64,
    paddingBottom: Platform.OS === 'ios' ? 24 : 10,
  },
});