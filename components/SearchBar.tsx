// ─────────────────────────────────────────────
// components/SearchBar.tsx
// AI-first SearchBar – text · röst · bild (KARMA)
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../theme';

type Props = {
  placeholder?: string;
  onPressText?: () => void;
  onPressMic?: () => void;
  onPressCamera?: () => void;
};

export default function SearchBar({
  placeholder = 'Sök med text, röst eller bild',
  onPressText,
  onPressMic,
  onPressCamera,
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPressText}
    >
      <Ionicons
        name="search-outline"
        size={20}
        color={theme.colors.muted}
      />

      <Text style={styles.text}>{placeholder}</Text>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onPressMic}>
          <Ionicons
            name="mic-outline"
            size={20}
            color={theme.colors.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressCamera}>
          <Ionicons
            name="camera-outline"
            size={20}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  text: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: theme.colors.muted,
  },
  actions: {
    flexDirection: 'row',
    gap: 14,
  },
});