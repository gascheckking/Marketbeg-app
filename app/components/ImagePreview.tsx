// app/components/ImagePreview.tsx
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width / 3 - 20;

type Props = {
  uri: string;
};

export default function ImagePreview({ uri }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});
