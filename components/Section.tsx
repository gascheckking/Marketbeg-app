import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../app/theme';

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  title: {
    fontSize: theme.text.md,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 10,
  },
});