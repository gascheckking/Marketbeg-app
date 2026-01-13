// app/trade/confirm.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { theme } from '../theme';

export default function TradeConfirmScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.center}>
        <Text style={styles.title}>Byte accepterat</Text>
        <Text style={styles.subtitle}>
          Ni är överens. Dags att byta!
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardText}>
            ✔️ Direkt byte bekräftat
          </Text>
          <Text style={styles.cardMeta}>
            Kontakta varandra för upphämtning
          </Text>
        </View>
      </View>

      <Pressable
        style={styles.primary}
        onPress={() => router.replace('/')}
      >
        <Text style={styles.primaryText}>Tillbaka till Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.lg,
    justifyContent: 'space-between',
  },

  center: {
    alignItems: 'center',
    marginTop: theme.spacing.xl,
  },

  title: {
    fontSize: theme.text.xl,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: 6,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },

  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  cardText: {
    fontSize: theme.text.md,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 4,
  },

  cardMeta: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
  },

  primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 18,
    alignItems: 'center',
  },

  primaryText: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
  },
});