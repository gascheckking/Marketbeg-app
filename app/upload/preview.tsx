// app/upload/preview.tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ImagePreview from '../components/ImagePreview';

export default function PreviewScreen() {
  const { images } = useLocalSearchParams();
  const router = useRouter();

  const imageUris: string[] = images ? JSON.parse(images as string) : [];

  // Mock AI-förslag – en per bild (i verkligheten blir detta dynamiskt)
  const mockAds = imageUris.map((_, index) => ({
    id: index + 1,
    title: ['IKEA Malm sängram', 'iPhone 12 128GB', 'Nike Air Force 1', 'PlayStation 5', 'MacBook Pro 2020'][index % 5] || 'Okänt objekt',
    description: 'AI har analyserat bilden och skapat en bra beskrivning. Mycket gott skick, inga synliga skador.',
    price: ['1500 kr', '4200 kr', '800 kr', '4500 kr', '12000 kr'][index % 5] || '999 kr',
    category: ['Möbler', 'Elektronik', 'Kläder', 'Spel', 'Dator'][index % 5] || 'Övrigt',
  }));

  const renderImage = ({ item }: { item: string }) => (
    <ImagePreview uri={item} />
  );

  const publishAll = () => {
    Alert.alert(
      '🎉 Publicerat!',
      `${mockAds.length} annons${mockAds.length > 1 ? 'er' : ''} är nu live på Marketbeg!`,
      [{ text: 'OK', onPress: () => router.replace('/') }]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>AI:n har skapat dina annonser</Text>
      <Text style={styles.subtitle}>Granska förslagen – du kan ändra senare</Text>

      <FlatList
        data={imageUris}
        renderItem={renderImage}
        keyExtractor={(item) => item}
        numColumns={3}
        contentContainerStyle={styles.grid}
        scrollEnabled={false}
      />

      {mockAds.map((ad) => (
        <View key={ad.id} style={styles.adCard}>
          <Text style={styles.adTitle}>{ad.title}</Text>
          <Text style={styles.adCategory}>{ad.category}</Text>
          <Text style={styles.adDescription}>{ad.description}</Text>
          <Text style={styles.adPrice}>{ad.price}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.publishButton} onPress={publishAll}>
        <Text style={styles.publishText}>Publicera alla annonser</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>Tillbaka och ändra bilder</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
  },
  grid: {
    alignItems: 'center',
    marginBottom: 30,
  },
  adCard: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  adTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  adCategory: {
    fontSize: 14,
    color: '#0066ff',
    marginBottom: 8,
  },
  adDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 22,
  },
  adPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00aa55',
  },
  publishButton: {
    backgroundColor: '#ff5500',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  publishText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 14,
    alignItems: 'center',
  },
  backText: {
    color: '#0066ff',
    fontSize: 16,
  },
});