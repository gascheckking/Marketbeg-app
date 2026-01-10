import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const DATA = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  title: `Objekt ${i + 1}`,
  price: `${(i + 1) * 400} kr`,
}));

export default function BuyScreen() {
  return (
    <View style={styles.container}>
      {/* SEARCH BAR */}
      <TouchableOpacity style={styles.searchBar}>
        <Text style={styles.searchText}>Sök med text, röst eller bild</Text>
      </TouchableOpacity>

      {/* CATEGORY CHIPS */}
      <View style={styles.chips}>
        {['Elektronik', 'Kläder', 'Möbler', 'Sport', 'Övrigt'].map((c) => (
          <View key={c} style={styles.chip}>
            <Text style={styles.chipText}>{c}</Text>
          </View>
        ))}
      </View>

      {/* GRID */}
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ paddingBottom: 40 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.image} />
            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0f',
    padding: 16,
  },

  searchBar: {
    backgroundColor: '#1a1a1f',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  searchText: {
    color: '#888',
    fontSize: 15,
  },

  chips: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 18,
    flexWrap: 'wrap',
  },
  chip: {
    backgroundColor: '#1a1a1f',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipText: {
    color: '#0bbf8a',
    fontWeight: '600',
    fontSize: 13,
  },

  card: {
    flex: 1,
    backgroundColor: '#141418',
    borderRadius: 16,
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
    color: '#fff',
    fontSize: 14,
    marginBottom: 6,
  },
  price: {
    color: '#0bbf8a',
    fontSize: 16,
    fontWeight: '800',
  },
});