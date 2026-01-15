import { Stack } from 'expo-router';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0b0b0f' }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </View>
  );
}