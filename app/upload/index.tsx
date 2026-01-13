// app/upload/index.tsx
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { theme } from '../theme';

export default function UploadScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Lägg till bilder</Text>
      <Pressable
        style={styles.cta}
        onPress={() =>
          router.push({
            pathname: '/upload/preview',
            params: { images: JSON.stringify(['demo']) },
          })
        }
      >
        <Text style={styles.ctaText}>Få prisförslag</Text>
      </Pressable>
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
    color: theme.colors.text,
    marginBottom: 20,
  },
  cta: {
    backgroundColor: theme.colors.primary,
    padding: 16,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
  },
  ctaText: {
    fontWeight: '900',
    color: '#000',
  },
});