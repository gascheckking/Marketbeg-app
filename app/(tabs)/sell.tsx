// app/(tabs)/sell.tsx
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { router } from 'expo-router';
import { theme } from '../theme';
import ImagePreview from '../../components/ImagePreview';

export default function SellScreen() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);
  const [processing, setProcessing] = useState(false);

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Kamera krävs', 'Tillåt kamera för att ta foto.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.85,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, ...result.assets]);
    }
  };

  const pickImages = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Åtkomst krävs', 'Tillåt åtkomst till bilder.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      quality: 0.85,
    });

    if (!result.canceled) {
      setImages((prev) => [...prev, ...result.assets]);
    }
  };

  const goNext = () => {
    if (!images.length) return;
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      router.push({
        pathname: '/upload/preview',
        params: {
          images: JSON.stringify(images.map((i) => i.uri)),
        },
      });
    }, 700);
  };

  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Sälj snabbt</Text>
        <Text style={styles.subtitle}>
          Fota. Godkänn pris. Klart.
        </Text>
      </View>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.primary} onPress={takePhoto}>
          <Text style={styles.primaryText}>Ta foto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondary} onPress={pickImages}>
          <Text style={styles.secondaryText}>
            Välj från galleri
            {images.length > 0 && ` (${images.length})`}
          </Text>
        </TouchableOpacity>
      </View>

      {/* GRID */}
      {images.length > 0 && (
        <>
          <FlatList
            data={images}
            keyExtractor={(i) => i.uri}
            numColumns={3}
            renderItem={({ item }) => (
              <ImagePreview uri={item.uri} />
            )}
            contentContainerStyle={styles.grid}
          />

          <TouchableOpacity
            style={styles.cta}
            onPress={goNext}
            disabled={processing}
          >
            <Text style={styles.ctaText}>
              {processing ? 'Analyserar…' : 'Få prisförslag'}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.md,
  },

  header: {
    marginBottom: theme.spacing.lg,
  },

  title: {
    fontSize: theme.text.xl,
    fontWeight: '900',
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginTop: 4,
  },

  actions: {
    gap: 12,
    marginBottom: theme.spacing.lg,
  },

  primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },

  primaryText: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
  },

  secondary: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  secondaryText: {
    fontSize: theme.text.sm,
    fontWeight: '700',
    color: theme.colors.text,
  },

  grid: {
    marginTop: 8,
    paddingBottom: 120,
  },

  cta: {
    position: 'absolute',
    left: theme.spacing.md,
    right: theme.spacing.md,
    bottom: theme.spacing.md,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },

  ctaText: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
  },
});