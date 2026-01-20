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

export default function ItemScreen() {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      {/* IMAGE */}
      <View style={styles.imageWrap}>
        <Image
          source={require('./assets/arbetsklader.png')}
          style={styles.image}
        />

        <Pressable style={styles.back} onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </Pressable>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>NY</Text>
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>Arbetskläder vinter</Text>
        <Text style={styles.price}>450 kr</Text>

        <Text style={styles.meta}>Upplagd för 2 timmar sedan • 3 km bort</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Beskrivning</Text>
          <Text style={styles.text}>
            Nästan oanvända arbetskläder i mycket fint skick.
            Passar perfekt för vinterarbete. Hämtas lokalt eller skickas.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detaljer</Text>
          <Text style={styles.text}>• Skick: Mycket bra</Text>
          <Text style={styles.text}>• Storlek: M</Text>
          <Text style={styles.text}>• Kategori: Kläder</Text>
        </View>
      </View>

      {/* CTA */}
      <LinearGradient
        colors={['rgba(11,11,15,0)', '#0b0b0f']}
        style={styles.footer}
      >
        <Pressable style={styles.primary}>
          <Text style={styles.primaryText}>Köp nu</Text>
        </Pressable>

        <Pressable style={styles.secondary}>
          <Text style={styles.secondaryText}>Byt / trada</Text>
        </Pressable>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0b0b0f',
  },

  imageWrap: {
    height: 420,
    backgroundColor: '#111',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  back: {
    position: 'absolute',
    top: 50,
    left: 16,
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },

  badge: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: '#7CF3C0',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#000',
  },

  content: {
    padding: 16,
    paddingBottom: 120,
  },

  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#fff',
  },

  price: {
    fontSize: 22,
    fontWeight: '900',
    color: '#7CF3C0',
    marginTop: 6,
  },

  meta: {
    color: '#9a9aa0',
    marginTop: 4,
    marginBottom: 20,
  },

  section: {
    marginBottom: 20,
  },

  sectionTitle: {
    color: '#fff',
    fontWeight: '800',
    marginBottom: 6,
  },

  text: {
    color: '#b6b6bd',
    lineHeight: 20,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    gap: 10,
  },

  primary: {
    backgroundColor: '#7CF3C0',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },

  primaryText: {
    fontWeight: '900',
    color: '#000',
    fontSize: 16,
  },

  secondary: {
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a36',
  },

  secondaryText: {
    color: '#fff',
    fontWeight: '800',
  },
});