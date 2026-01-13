// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Tabs (Home, Sell, etc) */}
      <Stack.Screen name="(tabs)" />

      {/* Upload flow (modal/stack) */}
      <Stack.Screen name="upload" />
    </Stack>
  );
}