import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { theme } from '../theme';
import CategorySheet from '../components/CategorySheet';

const DATA = Array.from({ length: 14 }).map((_, i) => ({
  id: i.toString(),
  title: `Objekt ${i + 1}`,
  price: `${(i + 1) * 350} kr`,
}));

export default function BuyScreen() {
  const [category, setCategory] = useState('Alla');
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.page}>
      {/* FILTER BAR */}
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterChip} onPress={() => setOpen(true)}>
          <Text style={styles.filterText}>Kategori: {category}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterText}>Pris</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterChip}>
          <Text style={styles.filterText}>Skick</Text>
        </TouchableOpacity>
      </View>

      {/* GRID */}
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.image} />
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />

      <CategorySheet
        visible={open}
        selected={category}
        onSelect={setCategory}
        onClose={() => setOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  filterBar: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  filterChip: {
    backgroundColor: theme.colors.card,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  filterText: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  grid: {
    padding: 16,
  },
  row: {
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
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
    marginBottom: 6,
  },
  price: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '800',
  },
});