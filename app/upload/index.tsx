import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { router } from 'expo-router';
import { theme } from '../theme';

export default function UploadScreen() {
  const [processing, setProcessing] = useState(false);

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Kamera krävs', 'Tillåt kamera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 0.85,
    });

    if (!result.canceled) {
      router.push({
        pathname: '/upload/preview',
        params: {
          images: JSON.stringify(result.assets.map(a => a.uri)),
        },
      });
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.center}>
        <Text style={styles.title}>Sälj objekt</Text>
        <Text style={styles.subtitle}>
          Ta ett foto – AI gör resten
        </Text>

        <TouchableOpacity
          style={styles.cta}
          onPress={takePhoto}
          disabled={processing}
        >
          <Text style={styles.ctaText}>Ta foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    justifyContent: 'center',
    padding: theme.spacing.lg,
  },

  center: {
    alignItems: 'center',
  },

  title: {
    fontSize: theme.text.xl,
    fontWeight: '900',
    color: theme.colors.text,
    marginBottom: 6,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginBottom: theme.spacing.lg,
  },

  cta: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    paddingVertical: 18,
    paddingHorizontal: 40,
  },

  ctaText: {
    fontSize: theme.text.md,
    fontWeight: '900',
    color: '#000',
  },
});