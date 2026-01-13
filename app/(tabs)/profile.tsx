// app/(tabs)/profile.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../theme';

const SECTIONS = [
  {
    title: 'Ditt konto',
    rows: [
      { label: 'Affärer', value: '0' },
      { label: 'Karma-nivå', value: 'Ny användare' },
      { label: 'Historik', value: 'Kommer snart' },
    ],
  },
  {
    title: 'Inställningar',
    rows: [
      { label: 'Aviseringar' },
      { label: 'Betalningar' },
      { label: 'Sekretess' },
    ],
  },
  {
    title: 'Support',
    rows: [
      { label: 'Hjälp & support' },
      { label: 'Villkor' },
      { label: 'Om KARMA' },
    ],
  },
];

export default function ProfileScreen() {
  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.kicker}>Din profil</Text>
        <Text style={styles.title}>KARMA</Text>
        <Text style={styles.subtitle}>
          Ditt rykte i den cirkulära ekonomin
        </Text>
      </View>

      {/* LISTS */}
      {SECTIONS.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>

          <View style={styles.list}>
            {section.rows.map((row) => (
              <Pressable key={row.label} style={styles.row}>
                <Text style={styles.rowLabel}>{row.label}</Text>

                <View style={styles.rowRight}>
                  {row.value && (
                    <Text style={styles.rowValue}>{row.value}</Text>
                  )}
                  <Ionicons
                    name="chevron-forward"
                    size={16}
                    color={theme.colors.muted}
                  />
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      ))}

      {/* FOOTER */}
      <Text style={styles.footer}>
        Mer kontroll och funktioner kommer snart.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    paddingTop: theme.spacing.lg,
  },

  header: {
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },

  kicker: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
    marginBottom: 2,
  },

  title: {
    fontSize: theme.text.xl,
    fontWeight: '900',
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginTop: 4,
  },

  section: {
    marginBottom: theme.spacing.lg,
  },

  sectionTitle: {
    fontSize: theme.text.sm,
    fontWeight: '700',
    color: theme.colors.muted,
    paddingHorizontal: theme.spacing.lg,
    marginBottom: 6,
  },

  list: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.bg,
  },

  rowLabel: {
    fontSize: theme.text.sm,
    fontWeight: '600',
    color: theme.colors.text,
  },

  rowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  rowValue: {
    fontSize: theme.text.xs,
    color: theme.colors.muted,
  },

  footer: {
    marginTop: theme.spacing.lg,
    textAlign: 'center',
    fontSize: theme.text.xs,
    color: theme.colors.muted,
  },
});