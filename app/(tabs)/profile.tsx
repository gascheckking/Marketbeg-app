// app/(tabs)/profile.tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { theme } from '../theme';
import { getEvents, resetAnalytics } from '../lib/analytics';

export default function ProfileScreen() {
  const events = getEvents().slice().reverse();

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      <Text style={styles.title}>Intern KPI</Text>
      <Text style={styles.subtitle}>Endast för test / beta</Text>

      {events.length === 0 && (
        <Text style={styles.empty}>Ingen data ännu</Text>
      )}

      {events.map((e, i) => (
        <View key={i} style={styles.row}>
          <Text style={styles.event}>{e.name}</Text>
          {e.data?.seconds && <Text style={styles.meta}>{e.data.seconds}s</Text>}
        </View>
      ))}

      <Pressable style={styles.reset} onPress={resetAnalytics}>
        <Text style={styles.resetText}>Nollställ data</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.bg },
  container: { padding: theme.spacing.lg, paddingBottom: 120 },
  title: { fontSize: theme.text.lg, fontWeight: '900', color: theme.colors.text },
  subtitle: { color: theme.colors.muted, marginBottom: 16 },
  empty: { color: theme.colors.muted, marginTop: 20 },
  row: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  event: { color: theme.colors.text, fontWeight: '700' },
  meta: { color: theme.colors.primary, fontWeight: '900' },
  reset: { marginTop: 20, alignItems: 'center' },
  resetText: { color: theme.colors.muted },
});