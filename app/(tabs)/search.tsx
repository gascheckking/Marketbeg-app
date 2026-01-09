import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

const DATA = Array.from({ length: 14 }).map((_, i) => ({
  id: i.toString(),
  title: `Objekt ${i + 1}`,
  price: `${(i + 1) * 350} kr`,
}));

export default function BuyScreen() {
  return (
    <View style={styles.page}>
      {/* FILTER BAR */}
      <View style={styles.filterBar}>
        {['Kategori', 'Pris', 'Skick'].map((label) => (
          <TouchableOpacity key={label} style={styles.filterChip}>
            <Text style={styles.filterText}>{label}</Text>
          </TouchableOpacity>
        ))}
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