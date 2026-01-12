import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../app/theme';

export default function RowItem({ title, price }: {
  title: string;
  price: string;
}) {
  return (
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#555" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.text,
  },
  price: {
    fontSize: 13,
    fontWeight: '800',
    color: theme.colors.primary,
    marginTop: 2,
  },
});