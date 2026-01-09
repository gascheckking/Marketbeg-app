import { View, Text, StyleSheet, FlatList } from 'react-native';
import { theme } from '../theme';

const DATA = Array.from({ length: 12 }).map((_, i) => ({
  id: i.toString(),
  title: `Objekt ${i + 1}`,
  price: `${(i + 1) * 250} kr`,
}));

export default function BuyScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(i) => i.id}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.title}>{item.title}</Text>
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
  card: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: 12,
    marginBottom: 12,
  },
  imagePlaceholder: {
    height: 120,
    borderRadius: 12,
    backgroundColor: '#222',
    marginBottom: 10,
  },
  title: {
    color: theme.colors.text,
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
});