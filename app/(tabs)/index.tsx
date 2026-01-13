// app/(tabs)/index.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { router } from 'expo-router';
import { theme } from '../theme';
import Section from '../../components/Section';
import MiniCard from '../../components/MiniCard';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <Text style={styles.kicker}>Välkommen tillbaka</Text>
        <Text style={styles.title}>Karma</Text>
        <Text style={styles.subtitle}>Hitta något nytt idag</Text>

        <View style={styles.karmaCard}>
          <Text style={styles.karmaLabel}>KARMA</Text>
          <Text style={styles.karmaValue}>1 250</Text>
          <Text style={styles.karmaMeta}>Eco-hjälte</Text>

          <View style={styles.karmaActions}>
            <Pressable style={styles.primaryBtn}>
              <Text style={styles.primaryText}>Tjäna Karma</Text>
            </Pressable>
            <Pressable style={styles.secondaryBtn}>
              <Text style={styles.secondaryText}>Min impact</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
        {['Kläder', 'Skor', 'Hem', 'Elektronik', 'Barn'].map((c) => (
          <View key={c} style={styles.category}>
            <Text style={styles.categoryText}>{c}</Text>
          </View>
        ))}
      </ScrollView>

      <Section title="Utvalt för dig">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MiniCard title="Vintagejacka" price="1 200 kr" />
          <MiniCard title="Sneakers i din stil" price="900 kr" />
          <MiniCard title="Retro hoodie" price="650 kr" />
        </ScrollView>
      </Section>

      <Section title="Populärt just nu">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <MiniCard title="Barnkläder vinter" price="Paket" />
          <MiniCard title="Säkerhetskläder" price="Snabbt sålt" />
          <MiniCard title="Småmöbler" price="Hög efterfrågan" />
        </ScrollView>
      </Section>

      <Pressable
        style={styles.sellHint}
        onPress={() => router.push('/(tabs)/sell')}
      >
        <Text style={styles.sellHintText}>Vill du sälja något?</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.bg },
  container: { paddingBottom: theme.spacing.lg },

  hero: { padding: theme.spacing.md },
  kicker: { fontSize: theme.text.xs, color: theme.colors.muted },
  title: { fontSize: theme.text.xl, fontWeight: '900', color: theme.colors.text },
  subtitle: { fontSize: theme.text.sm, color: theme.colors.muted },

  karmaCard: {
    marginTop: 12,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  karmaLabel: { fontSize: theme.text.xs, color: theme.colors.muted },
  karmaValue: { fontSize: 34, fontWeight: '900', color: theme.colors.text },
  karmaMeta: { fontSize: theme.text.sm, color: theme.colors.muted },

  karmaActions: { flexDirection: 'row', gap: 10, marginTop: 12 },
  primaryBtn: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: 10,
    alignItems: 'center',
  },
  primaryText: { fontWeight: '900', color: '#000' },
  secondaryBtn: {
    flex: 1,
    borderRadius: theme.radius.md,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  secondaryText: { color: theme.colors.text },

  categories: { paddingHorizontal: theme.spacing.md, gap: 8 },
  category: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  categoryText: { color: theme.colors.text },

  sellHint: { marginVertical: 20, alignItems: 'center' },
  sellHintText: { color: theme.colors.muted },
});