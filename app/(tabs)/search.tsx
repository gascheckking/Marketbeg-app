import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

const DATA = Array.from({ length: 20 }).map((_, i) => ({
  id: i.toString(),
  title: `iPhone ${13 + (i % 3)} Pro`,
  instantPrice: 4200 + i * 120,
  match: Math.floor(Math.random() * 15) + 85,
  speed: ['Instant', 'Fast', 'Medium'][i % 3],
}));

export default function LiquidityFeed() {
  return (
    <View style={styles.page}>
      {/* FEED HEADER */}
      <View style={styles.feedHeader}>
        <Text style={styles.feedTitle}>Likviditet</Text>
        <Text style={styles.feedSubtitle}>Acceptera pris · Pengar direkt</Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.image} />

            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>

            <Text style={styles.instant}>
              Instant price
            </Text>
            <Text style={styles.price}>
              {item.instantPrice.toLocaleString()} kr
            </Text>

            <View style={styles.metaRow}>
              <Text style={styles.match}>Match {item.match}%</Text>
              <Text style={styles.speed}>{item.speed}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  feedHeader: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  feedTitle: {
    color: theme.colors.text,
    fontSize: 26,
    fontWeight: '900',
  },
  feedSubtitle: {
    color: theme.colors.muted,
    marginTop: 4,
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.lg,
    padding: 12,
    marginBottom: 12,
  },
  image: {
    height: 120,
    borderRadius: 12,
    backgroundColor: '#222',
    marginBottom: 10,
  },
  title: {
    color: theme.colors.text,
    fontSize: 14,
    marginBottom: 8,
  },
  instant: {
    color: theme.colors.muted,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  price: {
    color: theme.colors.primary,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  match: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  speed: {
    color: theme.colors.muted,
    fontSize: 12,
  },
});