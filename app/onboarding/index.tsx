import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function Onboarding() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Välkommen till Karma</Text>
      <Text style={styles.text}>
        Här handlar du smartare, säljer snabbare och gör skillnad.
      </Text>

      <Pressable
        style={styles.btn}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.btnText}>In i appen</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0b0b0f', padding: 32 },
  title: { fontSize: 28, color: '#fff', fontWeight: '900', marginBottom: 12 },
  text: { color: '#9a9aa0', textAlign: 'center', marginBottom: 32 },
  btn: { backgroundColor: '#7CF3C0', padding: 16, borderRadius: 16 },
  btnText: { fontWeight: '900', color: '#000' },
});