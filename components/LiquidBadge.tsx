import { View, Text, StyleSheet } from 'react-native';

export default function LiquidBadge() {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>⚡ Likvid nu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#0bbf8a',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: '800',
    color: '#000',
  },
});
