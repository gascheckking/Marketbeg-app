// ─────────────────────────────────────────────
// components/CategorySheet.tsx
// Bottom sheet – minimal market style
// ─────────────────────────────────────────────

import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { theme } from '../theme';

const CATEGORIES = [
  'Alla',
  'Elektronik',
  'Möbler',
  'Kläder',
  'Skor',
  'Sport & Fritid',
  'Barn',
  'Hem & Hushåll',
  'Samlarobjekt',
  'Övrigt',
];

export default function CategorySheet({
  visible,
  onClose,
  onSelect,
  selected,
}: {
  visible: boolean;
  onClose: () => void;
  onSelect: (cat: string) => void;
  selected: string;
}) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.handle} />

          <ScrollView>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={styles.item}
                onPress={() => {
                  onSelect(cat);
                  onClose();
                }}
              >
                <Text
                  style={[
                    styles.text,
                    selected === cat && styles.active,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: theme.colors.bg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 18,
    paddingBottom: 20,
    maxHeight: '80%',
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: '#2a2a2f',
    borderRadius: 4,
    alignSelf: 'center',
    marginVertical: 12,
  },
  item: {
    paddingVertical: 14,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
  },
  active: {
    color: theme.colors.primary,
    fontWeight: '900',
  },
});