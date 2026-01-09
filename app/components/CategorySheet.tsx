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
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: theme.colors.bg,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '80%',
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#333',
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
  },
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  activeItem: {
    backgroundColor: '#111',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  itemText: {
    color: theme.colors.text,
    fontSize: 16,
  },
  activeText: {
    color: theme.colors.primary,
    fontWeight: '800',
  },
  closeBtn: {
    marginTop: 12,
    padding: 14,
    alignItems: 'center',
  },
  closeText: {
    color: theme.colors.muted,
    fontSize: 16,
  },
});