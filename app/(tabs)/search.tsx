// ─────────────────────────────────────────────
// app/(tabs)/search.tsx
// Buy / Discover – Grid ↔ List
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { theme } from '../theme';
import SearchBar from '../../components/SearchBar';
import BuyCard from '../../components/BuyCard';

const MOCK_ITEMS = Array.from({ length: 8 }).map((_, i) => ({
  id: String(i),
  title: `Objekt ${i + 1}`,
  price: `${(i + 1) * 900} kr`,
  category: 'Elektronik',
}));

export default function SearchScreen() {
  const [list, setList] = useState(false);

  return (
    <View style={styles.container}>
      <SearchBar compact={list} />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Populärt</Text>

        <TouchableOpacity onPress={() => setList(!list)}>
          <Ionicons
            name={list ? 'grid-outline' : 'list-outline'}
            size={22}
            color={theme.colors.muted}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={MOCK_ITEMS}
        key={list ? 'list' : 'grid'}
        numColumns={list ? 1 : 2}
        keyExtractor={(i) => i.id}
        columnWrapperStyle={!list ? { gap: 14 } : undefined}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
});