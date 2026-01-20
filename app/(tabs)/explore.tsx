import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const MOCK = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Objekt ${i + 1}`,
  price: `${300 + i * 50} kr`,
  image: require('../assets/arbetsklader.png'),
  badge: i % 3 === 0 ? 'NY' : i % 3 === 1 ? 'HET' : 'POPULÄR',
}));

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Utforska</Text>
        <Text style={styles.subtitle}>Nya objekt just nu</Text>
      </View>

      {/* GRID */}
      <View style={styles.grid}>
        {MOCK.map((item) => (
          <Pressable
            key={item.id}
            style={styles.card}
            onPress={() => router.push('/item')}
          >
            <Image source={item.image} style={styles.image} />

            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.badge}</Text>
            </View>

            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.9)']}
              style={styles.overlay}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </LinearGradient>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0b0b0f',
  },

  header: {
    padding: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: '900',
    color: '#fff',
  },

  subtitle: {
    color: '#9a9aa0',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    padding: 16,
  },

  card: {
    width: '48%',
    height: 230,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#111',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },

  cardTitle: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14,
  },

  price: {
    color: '#7CF3C0',
    fontWeight: '900',
    marginTop: 2,
  },

  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#7CF3C0',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  badgeText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#000',
  },
});