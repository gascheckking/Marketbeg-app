// app/(tabs)/sell.tsx
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import ImagePreview from '../components/ImagePreview';

export default function SellScreen() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const pickImages = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Behörighet behövs', 'Tillåt åtkomst till bilder för att sälja.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets]);
      Alert.alert('Bilder tillagda', `${result.assets.length} nya bilder valda!`);
    }
  };

  const renderImage = ({ item }: { item: ImagePicker.ImagePickerAsset }) => (
    <ImagePreview uri={item.uri} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sälj på sekunder 📸</Text>
      <Text style={styles.subtitle}>Välj bilder från galleriet</Text>

      <TouchableOpacity style={styles.button} onPress={pickImages}>
        <Text style={styles.buttonText}>
          {images.length > 0 ? `+ Lägg till fler (${images.length} valda)` : 'Välj bilder'}
        </Text>
      </TouchableOpacity>

      {images.length > 0 && (
        <>
          <Text style={styles.info}>
            {images.length} bild{images.length > 1 ? 'er' : ''} redo för AI-analys
          </Text>

          <FlatList
            data={images}
            renderItem={renderImage}
            keyExtractor={(item) => item.uri}
            numColumns: 3
            contentContainerStyle={styles.grid}
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
  button: {
    backgroundColor: '#0066ff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
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
  },
});
