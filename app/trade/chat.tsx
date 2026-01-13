// app/trade/chat.tsx
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { theme } from '../theme';

export default function TradeChatScreen() {
  const { matchId } = useLocalSearchParams<{ matchId?: string }>();

  return (
    <View style={styles.page}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Byteförfrågan</Text>
        <Text style={styles.subtitle}>
          Direkt dialog • Inga pengar än
        </Text>
      </View>

      {/* CHAT */}
      <ScrollView contentContainerStyle={styles.chat}>
        <View style={[styles.bubble, styles.them]}>
          <Text style={styles.text}>
            Hej! Vill du byta min popmoverall stl 92?
          </Text>
        </View>

        <View style={[styles.bubble, styles.me]}>
          <Text style={[styles.text, styles.meText]}>
            Ja, låter bra! Min är stl 86 i fint skick.
          </Text>
        </View>

        <View style={[styles.bubble, styles.them]}>
          <Text style={styles.text}>
            Perfekt, vill du köra direkt byte?
          </Text>
        </View>
      </ScrollView>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <Pressable
          style={styles.secondary}
          onPress={() => router.back()}
        >
          <Text style={styles.secondaryText}>Avbryt</Text>
        </Pressable>

        <Pressable
          style={styles.primary}
          onPress={() =>
            router.push({
              pathname: '/trade/confirm',
              params: { matchId },
            })
          }
        >
          <Text style={styles.primaryText}>Acceptera byte</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    padding: theme.spacing.lg,
  },

  header: {
    marginBottom: theme.spacing.md,
  },

  title: {
    fontSize: theme.text.lg,
    fontWeight: '900',
    color: theme.colors.text,
  },

  subtitle: {
    fontSize: theme.text.sm,
    color: theme.colors.muted,
    marginTop: 2,
  },

  chat: {
    gap: 10,
    paddingVertical: theme.spacing.md,
    flexGrow: 1,
  },

  bubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: theme.radius.md,
  },

  them: {
    backgroundColor: theme.colors.card,
    alignSelf: 'flex-start',
  },

  me: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
  },

  text: {
    fontSize: theme.text.sm,
    color: theme.colors.text,
  },

  meText: {
    color: '#000',
    fontWeight: '700',
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
  },

  secondary: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.md,
    paddingVertical: 14,
    alignItems: 'center',
  },

  secondaryText: {
    color: theme.colors.text,
    fontWeight: '700',
  },

  primary: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    paddingVertical: 14,
    alignItems: 'center',
  },

  primaryText: {
    color: '#000',
    fontWeight: '900',
  },
});