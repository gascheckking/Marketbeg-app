import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

export default function LandingScreen() {
  return (
    <View style={styles.page}>
      <ImageBackground
        source={require('../assets/arbetsklader.png')}
        style={styles.hero}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.95)']}
          style={styles.overlay}
        >
          <Text style={styles.logo}>KARMA</Text>

          <Text style={styles.title}>
            Köp. Sälj. Byt.  
            Med mening.
          </Text>

          <Text style={styles.subtitle}>
            Second hand, auktioner och byten –  
            smartare, snabbare och bättre för planeten.
          </Text>

          <View style={styles.actions}>
            <Pressable
              style={styles.primaryBtn}
              onPress={() => router.replace('/(tabs)')}
            >
              <Text style={styles.primaryText}>Kom igång</Text>
            </Pressable>

            <Pressable
              style={styles.secondaryBtn}
              onPress={() => router.replace('/(tabs)/search')}
            >
              <Text style={styles.secondaryText}>Utforska</Text>
            </Pressable>
          </View>

          <Text style={styles.meta}>
            1 000+ objekt • AI-prissättning • Direkt byte
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#000',
  },

  hero: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },

  logo: {
    fontSize: 32,
    fontWeight: '900',
    color: '#7CF3C0',
    marginBottom: 16,
  },

  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    lineHeight: 40,
    marginBottom: 12,
  },

  subtitle: {
    color: '#b5b5bb',
    fontSize: 16,
    marginBottom: 24,
  },

  actions: {
    gap: 12,
    marginBottom: 16,
  },

  primaryBtn: {
    backgroundColor: '#7CF3C0',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },

  primaryText: {
    fontWeight: '900',
    fontSize: 16,
    color: '#000',
  },

  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#2a2a36',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },

  secondaryText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
  },

  meta: {
    marginTop: 12,
    color: '#8b8b93',
    textAlign: 'center',
    fontSize: 13,
  },
});