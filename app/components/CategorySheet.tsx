import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { theme } from '../theme';

const CATEGORIES = [
  'Elektronik',
  'Möbler',
  'Kläder',
  'Antikt & Design',
  'Hem & Hushåll',
  'Sport & Fritid',
  'Övrigt',
];

export default function CategorySheet({ visible, onClose, onSelect }: any) {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Välj kategori</Text>

          <ScrollView>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat}
                style={styles.row}
                onPress={() => {
                  onSelect(cat);
                  onClose();
                }}
              >
                <Text style={styles.text}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.close}>Avbryt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  sheet: {
    backgroundColor: theme.colors.card,
    borderTopLeftRadius: theme.radius.lg,
    borderTopRightRadius: theme.radius.lg,
    padding: theme.spacing.md,
    maxHeight: '70%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  row: {
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  text: {
    color: theme.colors.text,
    fontSize: 16,
  },
  close: {
    textAlign: 'center',
    color: theme.colors.muted,
    marginTop: theme.spacing.md,
  },
});