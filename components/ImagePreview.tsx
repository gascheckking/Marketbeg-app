// ─────────────────────────────────────────────
// components/ImagePreview.tsx
// Minimal image grid item
// ─────────────────────────────────────────────

import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../theme';

const { width } = Dimensions.get('window');
const SIZE = width / 3 - 20;

type Props = { uri: string };

export default function ImagePreview({ uri }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 6,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: theme.colors.surface,
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
});