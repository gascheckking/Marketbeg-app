// app/(tabs)/sell.tsx
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function SellScreen() {
  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const pickImages = async () => {
    // Be om behörighet
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Behörighet behövs', 'Tillåt åtkomst till bilder för att sälja.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // Multi-upload stöd från start
      quality: 0.8,
      base64: false,
    });

    if (!result.canceled) {
      setImages(result.assets);
      Alert.alert(
        'Bilder valda',
        `${result.assets.length} bild${result.assets.length > 1 ? 'er' : ''} klara för AI-analys!`
      );
      // Här kommer senare: skicka till AI för titel, beskrivning, pris osv.
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sälj på sekunder 📸</Text>
      <Text style={styles.subtitle}>Ta ett foto eller välj bilder från galleriet</Text>
      
      <TouchableOpacity style={styles.button} onPress={pickImages}>
        <Text style={styles.buttonText}>
          {images.length > 0 ? `Valt ${images.length} bilder – Lägg till fler` : 'Välj bilder'}
        </Text>
      </TouchableOpacity>

      {images.length > 0 && (
        <Text style={styles.info}>
          AI:n analyserar snart objekt, pris och skick automatiskt...
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#0066ff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
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
    marginTop: 20,
    fontStyle: 'italic',
  },
});
