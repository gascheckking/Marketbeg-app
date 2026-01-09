import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { theme } from '../theme';

const DATA = Array.from({ length: 20 }).map((_, i) => ({
  id: i.toString(),
  title: `Objekt ${i + 1}`,
  price: `${(i + 1) * 250} kr`,
  match: Math.floor(Math.random() * 40) + 60, // match-score %
}));

export default function BuyScreen() {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.page}>
      {/* AI SEARCH BAR */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Sök med AI · text, röst eller bild"
          placeholderTextColor={theme.colors.muted}
          style={styles.input}
          value={query}
          onChangeText={setQuery}
        />
        <Text style={styles.ai}>AI</Text>
      </View>

      {/* FILTER CHIPS */}
      <View style={styles.filters}>
        {['Kategori', 'Pris', 'Skick'].map((f) => (
          <TouchableOpacity key={f} style={styles.chip}>
            <Text style={styles.chipText}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* GRID */}
      <FlatList
        data={DATA}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.image} />
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.match}>Match {item.match}%</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: theme.colors.bg },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    borderRadius: 14,
    backgroundColor: theme.colors.card,
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    color: theme.colors.text,
    paddingVertical: 12,
  },
  ai: {
    color: theme.colors.primary,
    fontWeight: '800',
  },
  filters: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  chip: {
    backgroundColor: theme.colors.surface,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipText: {
    color: theme.colors.text,
    fontWeight: '600',
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  image: {
    height: 120,
    backgroundColor: '#222',
    borderRadius: 12,
    marginBottom: 10,
  },
  title: { color: theme.colors.text, fontSize: 14 },
  price: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '800',
    marginTop: 4,
  },
  match: {
    color: theme.colors.muted,
    fontSize: 12,
    marginTop: 2,
  },
});