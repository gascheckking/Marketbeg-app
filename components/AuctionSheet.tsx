import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { theme } from '../app/theme';

export default function AuctionSheet({
  visible,
  onClose,
  title,
}: {
  visible: boolean;
  onClose: () => void;
  title: string;
}) {
  return (
    <Modal transparent visible={visible} animationType="slide">
      <Pressable style={styles.backdrop} onPress={onClose}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Starta auktion</Text>
          <Text style={styles.item}>{title}</Text>

          {['1 timme', '6 timmar', '24 timmar'].map((t) => (
            <Pressable key={t} style={styles.option}>
              <Text style={styles.optionText}>{t}</Text>
            </Pressable>
          ))}
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: theme.colors.bg,
    padding: 20,
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
  },
  title: {
    fontWeight: '900',
    fontSize: theme.text.md,
    color: theme.colors.text,
  },
  item: {
    color: theme.colors.muted,
    marginBottom: 12,
  },
  option: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  optionText: {
    fontSize: theme.text.md,
    color: theme.colors.text,
  },
});