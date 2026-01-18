import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { theme } from '../theme';
import { images } from '../assets/images';

type Item = {
  id: string;
  title: string;
  price: number;
  image: any;
  tag?: string;
};

export default function ExploreScreen() {
  const items: Item[] = useMemo(
    () => [
      {
        id: '1',
        title: 'Nike Air Max 97',
        price: 650,
        image: images.skor,
        tag: 'Ny',
      },
      {
        id: '2',
        title: 'Vintage Denim Jacka',
        price: 400,
        image: images.vintagefynd,
      },
      {
        id: '3',
        title: 'Reflex Arbetsjacka',
        price: 50,
        image: images.arbetsklader,
        tag: 'Fynd',
      },
      {
        id: '4',
        title: 'Louis Vuitton väska',
        price: 1200,
        image: images.markesvaskor,
        tag: 'Populär',
      },
    ],
    []
  );

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Utforska</Text>
      <Text style={styles.subtitle}>Nytt som lagts upp just nu</Text>

      <View style={styles.grid}>
        {items.map((item) => (
          <Pressable key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />

            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.9)']}
              style={styles.overlay}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price} kr</Text>

              {item.tag && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.tag}</Text>
                </View>
              )}
            </LinearGradient>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}