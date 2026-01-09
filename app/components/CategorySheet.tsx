import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { theme } from '../theme';

const CATEGORIES = [
  { id: 'electronics', label: 'Elektronik', icon: '📱' },
  { id: 'fashion', label: 'Kläder', icon: '👕' },
  { id: 'furniture', label: 'Möbler', icon: '🪑' },
  { id: 'sports', label: 'Sport', icon: '🏃‍♂️' },
  { id: 'kids', label: 'Barn', icon: '🧸' },
  { id: 'other', label: 'Övrigt', icon: '✨' },
];

export function CategorySheet({
  visible,
  onClose,
  onSelect,
}: {
  visible: boolean;
  onClose: () => void;
  onSelect: (id: string) => void;
}) {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Välj kategori</Text>

          <View style={styles.grid}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity
                key={cat.id}
                style={styles.card}
                onPress={() => {
                  onSelect(cat.id);
                  onClose();
                }}
              >
                <Text style={styles.icon}>{cat.icon}</Text>
                <Text style={styles.label}>{cat.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>Avbryt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: theme.colors.bg,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '48%',
    backgroundColor: theme.colors.surface,
    borderRadius: 20,
    paddingVertical: 22,
    alignItems: 'center',
  },
  icon: {
    fontSize: 28,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
  },
  cancel: {
    textAlign: 'center',
    marginTop: 20,
    color: theme.colors.muted,
    fontSize: 16,
  },
});