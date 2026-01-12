import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function Section({ title, children }: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 22,
  },
  title: {
    fontSize: 15,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 10,
  },
});