import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { router } from 'expo-router';
import ImagePreview from '../components/ImagePreview';
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
        params: { images: JSON.stringify(images.map(i => i.uri)) },
      });
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sälj snabbt</Text>
      <Text style={styles.subtitle}>
        Fota eller välj bilder – AI:n skapar annonsen
      </Text>

      <TouchableOpacity style={styles.button} onPress={openCamera}>
        <Text style={styles.buttonText}>Ta foto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.alt]} onPress={pickFromGallery}>
        <Text style={styles.buttonText}>
          Välj från galleri {images.length > 0 && `(${images.length})`}
        </Text>
      </TouchableOpacity>

      {images.length > 0 && (
        <>
          <TouchableOpacity
            style={[styles.button, styles.primary]}
            onPress={goToPreview}
            disabled={isProcessing}
          >
            <Text style={styles.buttonText}>
              {isProcessing ? 'AI analyserar…' : 'Fortsätt'}
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
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 6,
  },
  subtitle: {
    color: theme.colors.muted,
    marginBottom: 24,
    fontSize: 16,
  },
  button: {
    backgroundColor: theme.colors.card,
    padding: 16,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    marginBottom: 12,
  },
  alt: {
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
});