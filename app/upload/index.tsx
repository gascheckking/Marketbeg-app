// app/upload/index.tsx
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { router } from 'expo-router';
import { theme } from '../theme';
import ImagePreview from '../../components/ImagePreview';

export default function UploadScreen() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const takePhoto = async () => {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (!perm.granted) {
      Alert.alert('Kamera krävs', 'Tillåt kamera för att ta foto.');
      return;
    }

    const res = await ImagePicker.launchCameraAsync({
      quality: 0.85,
    });

    if (!res.canceled) {
      setImages((prev) => [...prev, ...res.assets]);
    }
  };

  const pickImages = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      Alert.alert('Åtkomst krävs', 'Tillåt åtkomst till bilder.');
      return;
    }

    const res = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      quality: 0.85,
    });

    if (!res.canceled) {
      setImages((prev) => [...prev, ...res.assets]);
    }
  };

  const goNext = () => {
    if (!images.length) return;

    router.push({
      pathname: '/upload/preview',
      params: {
        images: JSON.stringify(images.map((i) => i.uri)),
      },
    });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Lägg till bilder</Text>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <Pressable style={styles.primary} onPress={takePhoto}>
          <Text style={styles.primaryText}>Ta foto</Text>
        </Pressable>

        <Pressable style={styles.secondary} onPress={pickImages}>
          <Text style={styles.secondaryText}>
            Välj från galleri
            {images.length > 0 && ` (${images.length})`}
          </Text>
        </Pressable>
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

          <Pressable style={styles.cta} onPress={goNext}>
            <Text style={styles.ctaText}>Få prisförslag</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.lg,
  },

  title: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: 16,
  },

  actions: {
    gap: 12,
    marginBottom: 16,
  },

  primary: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },

  primaryText: {
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
    color: theme.colors.text,
    fontWeight: '700',
  },

  grid: {
    paddingBottom: 120,
  },

  cta: {
    position: 'absolute',
    left: theme.spacing.lg,
    right: theme.spacing.lg,
    bottom: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 16,
    alignItems: 'center',
  },

  ctaText: {
    fontWeight: '900',
    color: '#000',
  },
});