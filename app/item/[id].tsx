import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { images } from '../assets/images';

export default function ItemScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.page}>
      <Image source={images.arbetsklader} style={styles.image} />

      <LinearGradient
        colors={['transparent', '#0b0b0f']}
        style={styles.fade}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Arbetskläder Pro</Text>
        <Text style={styles.price}>650 kr</Text>

        <Text style={styles.meta}>Mycket bra skick • Populär</Text>

        <Pressable style={styles.buyBtn}>
          <Text style={styles.buyText}>Köp direkt</Text>
        </Pressable>

        <Pressable style={styles.secondaryBtn}>
          <Text style={styles.secondaryText}>Byt / Trada</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#0b0b0f' },
  image: { width: '100%', height: 420 },
  fade: {
    position: 'absolute',
    bottom: 0,
    height: 200,
    width: '100%',
  },
  content: { padding: 16, marginTop: -60 },
  title: { fontSize: 26, fontWeight: '900', color: '#fff' },
  price: { fontSize: 22, color: '#7CF3C0', fontWeight: '900', marginTop: 4 },
  meta: { color: '#9a9aa0', marginVertical: 12 },
  buyBtn: {
    backgroundColor: '#7CF3C0',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  buyText: { fontWeight: '900', color: '#000' },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#2a2a36',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  secondaryText: { color: '#fff' },
});