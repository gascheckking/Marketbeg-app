// app/(tabs)/sell.tsx
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import ImagePreview from '../components/ImagePreview';

export default function SellScreen() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Behörighet behövs', 'Tillåt kamera för att ta foto direkt.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      quality: 0.8,
      allowsMultipleSelection: false, // Kamera tar en i taget
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets]);
      Alert.alert('Foto taget!', 'Bilden är redo för AI-analys 📸');
    }
  };

  const pickFromGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Behörighet behövs', 'Tillåt åtkomst till galleriet.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets]);
      Alert.alert('Bilder valda', `${result.assets.length} nya bilder tillagda!`);
    }
  };

  const renderImage = ({ item }: { item: ImagePicker.ImagePickerAsset }) => (
    <ImagePreview uri={item.uri} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sälj på sekunder 📸</Text>
      <Text style={styles.subtitle}>Ta foto direkt eller välj från galleriet</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Ta foto med kamera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.galleryButton]} onPress={pickFromGallery}>
          <Text style={styles.buttonText}>
            {images.length > 0 ? `+ Lägg till fler (${images.length} valda)` : 'Välj från galleriet'}
          </Text>
        </TouchableOpacity>
      </View>

      {images.length > 0 && (
        <>
          <Text style={styles.info}>
            {images.length} bild{images.length > 1 ? 'er' : ''} redo för AI-analys – tryck "Publicera" snart!
          </Text>

          <FlatList
            data={images}
            renderItem={renderImage}
            keyExtractor={(item) => item.uri}
            numColumns: 3
            contentContainerStyle={styles.grid}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0066ff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  galleryButton: {
    backgroundColor: '#00aa55',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#0066ff',
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: '500',
  },
  grid: {
    alignItems: 'center',
    marginTop: 10,
  },
});
