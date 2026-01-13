import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import { theme } from '../app/theme';

export default function TradeSheet({
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
      <View style={styles.backdrop}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Byt mot något</Text>
          <Text style={styles.item}>{title}</Text>

          <Pressable style={styles.option}>
            <Text style={styles.optionText}>
              Jag söker något annat
            </Text>
          </Pressable>

          <Pressable style={styles.option}>
            <Text style={styles.optionText}>
              Föreslå byte
            </Text>
          </Pressable>

          <Pressable style={styles.close} onPress={onClose}>
            <Text style={styles.closeText}>Stäng</Text>
          </Pressable>
        </View>
      </View>
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
    fontSize: theme.text.md,
    fontWeight: '900',
    color: theme.colors.text,
  },
  item: {
    color: theme.colors.muted,
    marginBottom: 12,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  optionText: {
    fontSize: theme.text.md,
    color: theme.colors.text,
  },
  close: {
    marginTop: 12,
    alignItems: 'center',
  },
  closeText: {
    color: theme.colors.muted,
  },
});