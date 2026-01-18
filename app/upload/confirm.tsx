// app/upload/confirm.tsx

import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

export default function LiveConfirmScreen() {
  return (
    <View style={styles.page}>
      <LinearGradient
        colors={['#1b1b28', '#0f0f14']}
        style={styles.card}
      >
        <Text style={styles.title}>🎉 Klart!</Text>
        <Text style={styles.subtitle}>
          Din annons är nu live
        </Text>

        <Text style={styles.meta}>
          Köpare kan redan se och kontakta dig.
        </Text>

        <Pressable
          style={styles.primary}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.primaryText}>
            Tillbaka till startsidan
          </Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },
  card: {
    borderRadius: theme.radius.xl,
    padding: 24,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: theme.text.md,
    color: theme.colors.text,
    marginBottom: 6,
  },
  meta: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    textAlign: 'center',
    marginBottom: 20,
  },
  primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  primaryText: {
    fontWeight: '900',
    color: '#000',
  },
});