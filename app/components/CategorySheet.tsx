// ─────────────────────────────────────────────
// components/CategorySheet.tsx
// BOTTOM SHEET – Vinted/Blocket-style
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

          <Text style={styles.title}>Kategori</Text>

          <ScrollView>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.item,
                  selected === cat && styles.activeItem,
                ]}
                onPress={() => {
                  onSelect(cat);
                  onClose();
                }}
              >
                <Text
                  style={[
                    styles.itemText,
                    selected === cat && styles.activeText,
                  ]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>Stäng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: theme.colors.bg,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    padding: 16,
    maxHeight: '82%',
    borderTopWidth: 1,
    borderColor: theme.colors.border,
  },
  handle: {
    width: 42,
    height: 4,
    backgroundColor: '#2a2a2f',
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 14,
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 12,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  activeItem: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  itemText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  activeText: {
    color: theme.colors.primary,
    fontWeight: '900',
  },
  closeBtn: {
    marginTop: 12,
    padding: 14,
    alignItems: 'center',
  },
  closeText: {
    color: theme.colors.muted,
    fontSize: 15,
  },
});