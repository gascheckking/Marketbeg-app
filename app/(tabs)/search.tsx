import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';

const CATEGORIES = [
  { id: '1', label: 'Elektronik', icon: 'phone-portrait-outline' },
  { id: '2', label: 'Kläder', icon: 'shirt-outline' },
  { id: '3', label: 'Möbler', icon: 'bed-outline' },
  { id: '4', label: 'Sport', icon: 'football-outline' },
  { id: '5', label: 'Övrigt', icon: 'apps-outline' },
];

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color={theme.colors.muted} />
        <Text style={styles.searchText}>
          Sök med text, röst eller bild
        </Text>

        <View style={styles.aiIcons}>
          <Ionicons name="mic-outline" size={20} color={theme.colors.primary} />
          <Ionicons name="camera-outline" size={20} color={theme.colors.primary} />
        </View>
      </View>

      {/* CATEGORIES */}
      <Text style={styles.sectionTitle}>Utforska kategorier</Text>

      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 14 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <Ionicons name={item.icon as any} size={26} color={theme.colors.primary} />
            <Text style={styles.categoryText}>{item.label}</Text>
          </TouchableOpacity>
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

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: 14,
    marginBottom: 24,
  },
  searchText: {
    flex: 1,
    marginLeft: 10,
    color: theme.colors.muted,
    fontSize: 15,
  },
  aiIcons: {
    flexDirection: 'row',
    gap: 12,
  },

  sectionTitle: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 16,
  },

  categoryCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.lg,
    padding: 20,
    marginBottom: 14,
    alignItems: 'center',
    gap: 10,
  },
  categoryText: {
    color: theme.colors.text,
    fontWeight: '700',
  },
});