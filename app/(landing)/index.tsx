import { View, Text, StyleSheet, Pressable, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useRef, useEffect } from 'react';

export default function Landing() {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 800, useNativeDriver: true }),
      Animated.timing(slide, { toValue: 0, duration: 800, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.page}>
      <LinearGradient colors={['#050508', '#0b0b12']} style={styles.bg} />

      <Animated.View
        style={[
          styles.content,
          { opacity: fade, transform: [{ translateY: slide }] },
        ]}
      >
        <Text style={styles.logo}>KARMA</Text>
        <Text style={styles.tagline}>Köp. Sälj. Rädda världen lite.</Text>

        <Image
          source={require('../assets/preview.png')}
          style={styles.preview}
        />

        <Pressable
          style={styles.cta}
          onPress={() => router.push('/onboarding')}
        >
          <Text style={styles.ctaText}>Öppna appen</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#000' },
  bg: { ...StyleSheet.absoluteFillObject },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: { fontSize: 44, fontWeight: '900', color: '#fff', marginBottom: 8 },
  tagline: { color: '#9a9aa0', marginBottom: 32 },
  preview: {
    width: 260,
    height: 520,
    borderRadius: 32,
    marginBottom: 32,
  },
  cta: {
    backgroundColor: '#7CF3C0',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 18,
  },
  ctaText: { color: '#000', fontWeight: '900', fontSize: 16 },
});