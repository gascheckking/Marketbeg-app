import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.container}>
      {/* HERO */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Sälj snabbt</Text>
        <Text style={styles.heroSubtitle}>
          AI matchar dig direkt mot redo köpare
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push('/(tabs)/sell')}
        >
          <Text style={styles.primaryButtonText}>Starta snabbsälj</Text>
        </TouchableOpacity>
      </View>

      {/* QUICK ACTIONS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Snabbt & enkelt</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📸 Ett foto räcker</Text>
          <Text style={styles.cardText}>
            Fota objektet – AI skapar titel, pris och kategori.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🧠 Smart matchning</Text>
          <Text style={styles.cardText}>
            Dina annonser matchas automatiskt mot relevanta köpare.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔒 Säker affär</Text>
          <Text style={styles.cardText}>
            Pengar hålls tills köparen godkänt varan.
          </Text>
        </View>
      </View>

      {/* PLACEHOLDER – KOMMANDE GRID */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Populärt just nu</Text>
        <Text style={styles.muted}>
          Kort-grid för Köp kommer här (nästa steg)
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingBottom: 40,
  },

  /* HERO */
  hero: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 50,
    backgroundColor: '#0b0b0f',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#b5b5b5',
    marginBottom: 30,
    lineHeight: 26,
  },
  primaryButton: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },

  /* SECTIONS */
  section: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  muted: {
    fontSize: 14,
    color: '#888',
  },

  /* CARDS */
  card: {
    backgroundColor: '#f5f5f7',
    borderRadius: 16,
    padding: 18,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
});