import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const IMAGE_SIZE = width / 3 - 28;

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
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
});
