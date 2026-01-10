// ─────────────────────────────────────────────
// app/(tabs)/sell.tsx
// Instant Liquid – Clean Sell Flow
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
import ImagePreview from '../../components/ImagePreview';
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
    const result = await ImagePicker.launchCameraAsync({ quality: 0.85 });
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
      quality: 0.85,
    });
    if (!result.canceled) setImages([...images, ...result.assets]);
  };

  const goToPreview = () => {
    if (!images.length) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      router.push({
        pathname: '/upload/preview',
        params: { images: JSON.stringify(images.map((i) => i.uri)) },
      });
    }, 900);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Snabbsälj</Text>
      <Text style={styles.subtitle}>
        Ett foto. Ett pris. Klart.
      </Text>

      <TouchableOpacity style={styles.primary} onPress={openCamera}>
        <Text style={styles.primaryText}>Ta foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondary} onPress={pickFromGallery}>
        <Text style={styles.secondaryText}>
          Välj från galleri {images.length > 0 && `(${images.length})`}
        </Text>
      </TouchableOpacity>

      {images.length > 0 && (
        <>
          <TouchableOpacity
            style={styles.cta}
            onPress={goToPreview}
            disabled={isProcessing}
          >
            <Text style={styles.ctaText}>
              {isProcessing ? 'AI analyserar…' : 'Få pris direkt'}
            </Text>
          </TouchableOpacity>

          <FlatList
            data={images}
            keyExtractor={(i) => i.uri}
            renderItem={({ item }) => <ImagePreview uri={item.uri} />}
            numColumns={3}
            contentContainerStyle={{ marginTop: 16 }}
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
    fontSize: 28,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: 24,
    fontSize: 15,
  },

  primary: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 18,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryText: {
    color: '#000',
    fontSize: 17,
    fontWeight: '900',
  },

  secondary: {
    backgroundColor: theme.colors.card,
    padding: 14,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  secondaryText: {
    color: theme.colors.text,
    fontSize: 14,
    fontWeight: '700',
  },

  cta: {
    backgroundColor: '#10221c',
    padding: 14,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    marginTop: 18,
  },
  ctaText: {
    color: theme.colors.primary,
    fontSize: 15,
    fontWeight: '800',
  },
});