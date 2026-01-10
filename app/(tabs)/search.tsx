// ─────────────────────────────────────────────
// app/(tabs)/search.tsx
// Buy / Discover – Spotify-style AI search + categories
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { theme } from '../theme';
import SearchBar from '../../components/SearchBar';
import BuyCard from '../../components/BuyCard';

const MOCK_ITEMS = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i),
  title: `Objekt ${i + 1}`,
  price: `${(i + 1) * 850} kr`,
  category: 'Elektronik',
}));

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <SearchBar />

      <Text style={styles.section}>Populärt just nu</Text>

      <FlatList
        data={MOCK_ITEMS}
        numColumns={2}
        keyExtractor={(i) => i.id}
        columnWrapperStyle={{ gap: 14 }}
        contentContainerStyle={{ gap: 14, paddingBottom: 40 }}
        renderItem={({ item }) => (
          <BuyCard
            title={item.title}
            price={item.price}
            category={item.category}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.md,
  },
  section: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
});