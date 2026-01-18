import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useMemo } from 'react';

import { theme } from '../theme';
import Section from '../../components/Section';
import RichCard from '../../components/RichCard';
import { getHomeFeed } from '../lib/aiFeed';
import { track } from '../lib/analytics';
import { images } from '../assets/images';

export default function HomeScreen() {
  useEffect(() => {
    track('home_viewed');
  }, []);

  const feed = useMemo(() => getHomeFeed(), []);

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Karma</Text>
        <Text style={styles.subtitle}>Hitta något nytt idag</Text>
      </View>

      {/* SCORE CARD */}
      <LinearGradient
        colors={['#1b1b28', '#0f0f14']}
        style={styles.scoreCard}
      >
        <Text style={styles.scoreLabel}>KARMA-SCORE</Text>
        <Text style={styles.scoreValue}>1 250</Text>
        <Text style={styles.scoreMeta}>Eco-hjälte</Text>

        <View style={styles.scoreActions}>
          <Pressable style={styles.primaryBtn}>
            <Text style={styles.primaryText}>Tjäna Karma</Text>
          </Pressable>
          <Pressable style={styles.secondaryBtn}>
            <Text style={styles.secondaryText}>Min impact</Text>
          </Pressable>
        </View>
      </LinearGradient>

      {/* FEATURED */}
      <View style={styles.featured}>
        <Featured image={images.arbetsklader} label="Arbetskläder" />
        <Featured image={images.skor} label="Sneakers" />
        <Featured image={images.markesvaskor} label="Märkesväskor" />
      </View>

      {/* FEED */}
      <Section title="Rekommenderat för dig">
        {feed.map((item) => (
          <RichCard
            key={item.id}
            title={item.title}
            price={`${item.price} kr`}
            badge={item.badge}
          />
        ))}
      </Section>

      <Pressable
        style={styles.sellHint}
        onPress={() => router.push('/(tabs)/sell')}
      >
        <Text style={styles.sellHintText}>Vill du sälja något?</Text>
      </Pressable>
    </ScrollView>
  );
}

function Featured({ image, label }: { image: any; label: string }) {
  return (
    <View style={styles.featureCard}>
      <Image source={image} style={styles.featureImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.9)']}
        style={styles.featureOverlay}
      >
        <Text style={styles.featureText}>{label}</Text>
      </LinearGradient>
    </View>
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

  scoreCard: {
    margin: 16,
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a2a36',
  },

  scoreLabel: {
    fontSize: 12,
    color: '#8b8b93',
  },

  scoreValue: {
    fontSize: 42,
    fontWeight: '900',
    color: '#fff',
  },

  scoreMeta: {
    color: '#8b8b93',
    marginBottom: 12,
  },

  scoreActions: {
    flexDirection: 'row',
    gap: 10,
  },

  primaryBtn: {
    flex: 1,
    backgroundColor: '#7CF3C0',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
  },

  primaryText: {
    fontWeight: '900',
    color: '#000',
  },

  secondaryBtn: {
    flex: 1,
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a36',
  },

  secondaryText: {
    color: '#fff',
    fontWeight: '700',
  },

  featured: {
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 24,
  },

  featureCard: {
    height: 180,
    borderRadius: 22,
    overflow: 'hidden',
  },

  featureImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  featureOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 14,
  },

  featureText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },

  sellHint: {
    marginVertical: 24,
    alignItems: 'center',
  },

  sellHintText: {
    color: '#8b8b93',
  },
});