// ─────────────────────────────────────────────
// app/(tabs)/sell.tsx
// Instant Liquid – Snabbsälj (förfinad)
// ─────────────────────────────────────────────

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { router } from 'expo-router';
import ImagePreview from '../components/ImagePreview';
import LiquidBadge from '../components/LiquidBadge';
import { theme } from '../theme';

export default function SellScreen() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Behörighet behövs', 'Tillåt kamera för att ta foto.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({ quality: 0.8 });
    if (!result.canceled) setImages([...images, ...result.assets]);
  };

  const pickFromGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Behörighet behövs', 'Tillåt åtkomst till galleriet.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) setImages([...images, ...result.assets]);
  };

  const goToPreview = () => {
    if (!images.length) {
      Alert.alert('Inga bilder', 'Välj eller ta minst en bild.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      router.push({
        pathname: '/upload/preview',
        params: { images: JSON.stringify(images.map((i) => i.uri)) },
      });
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <LiquidBadge />

      <Text style={styles.title}>Snabbsälj</Text>
      <Text style={styles.subtitle}>
        Fota – få ett pris direkt från marknaden
      </Text>

      <TouchableOpacity style={styles.primaryBtn} onPress={openCamera}>
        <Text style={styles.primaryText}>Ta foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryBtn} onPress={pickFromGallery}>
        <Text style={styles.secondaryText}>
          Välj från galleri {images.length > 0 && `(${images.length})`}
        </Text>
      </TouchableOpacity>

      {images.length > 0 && (
        <>
          <TouchableOpacity
            style={styles.ctaBtn}
            onPress={goToPreview}
            disabled={isProcessing}
          >
            <Text style={styles.ctaText}>
              {isProcessing ? 'AI analyserar…' : 'Få pris nu'}
            </Text>
          </TouchableOpacity>

          <FlatList
            data={images}
            keyExtractor={(i) => i.uri}
            renderItem={({ item }) => <ImagePreview uri={item.uri} />}
            numColumns={3}
            contentContainerStyle={{ marginTop: 18 }}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.md,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: theme.colors.text,
    marginTop: 12,
    marginBottom: 6,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: 28,
    fontSize: 16,
  },

  primaryBtn: {
    backgroundColor: theme.colors.primary,
    padding: 18,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    marginBottom: 14,
  },
  primaryText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '900',
  },

  secondaryBtn: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: 18,
  },
  secondaryText: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: '700',
  },

  ctaBtn: {
    backgroundColor: '#10221c',
    padding: 16,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    marginBottom: 12,
  },
  ctaText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '800',
  },
});