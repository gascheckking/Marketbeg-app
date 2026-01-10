// ─────────────────────────────────────────────
// app/(tabs)/search.tsx
// Buy / Discover – Minimal AI feed
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
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <BuyCard
            title={item.title}
            price={item.price}
            category={item.category}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    paddingHorizontal: theme.spacing.md,
  },
  section: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    color: theme.colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
  row: {
    gap: 12,
  },
  list: {
    paddingBottom: 120,
    gap: 12,
  },
});