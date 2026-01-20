import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  return (
    <View style={styles.page}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {/* SLIDE 1 */}
        <LinearGradient
          colors={['#0b0b0f', '#12121a']}
          style={styles.slide}
        >
          <Text style={styles.kicker}>VÄLKOMMEN TILL</Text>
          <Text style={styles.title}>KARMA</Text>
          <Text style={styles.text}>
            Köp, sälj och byt smartare – med AI och mening.
          </Text>
        </LinearGradient>

        {/* SLIDE 2 */}
        <LinearGradient
          colors={['#0f0f14', '#1b1b28']}
          style={styles.slide}
        >
          <Text style={styles.title}>AI hjälper dig</Text>
          <Text style={styles.text}>
            Pris direkt • Snabb match • Bättre affärer
          </Text>
        </LinearGradient>

        {/* SLIDE 3 */}
        <LinearGradient
          colors={['#0b0b0f', '#0f0f14']}
          style={styles.slide}
        >
          <Text style={styles.title}>Redo?</Text>
          <Text style={styles.text}>
            Utforska tusentals objekt och börja tjäna Karma
          </Text>

          <Pressable
            style={styles.cta}
            onPress={() => router.replace('/(tabs)')}
          >
            <Text style={styles.ctaText}>In i appen</Text>
          </Pressable>
        </LinearGradient>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#000',
  },

  slide: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },

  kicker: {
    color: '#7CF3C0',
    fontWeight: '900',
    marginBottom: 8,
    letterSpacing: 2,
  },

  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },

  text: {
    fontSize: 16,
    color: '#b5b5bb',
    textAlign: 'center',
    maxWidth: 300,
  },

  cta: {
    marginTop: 32,
    backgroundColor: '#7CF3C0',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 22,
  },

  ctaText: {
    fontWeight: '900',
    fontSize: 16,
    color: '#000',
  },
});