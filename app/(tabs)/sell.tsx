import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { router } from 'expo-router';

export default function SellScreen() {
  const [count, setCount] = useState(0);

  const pick = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Behörighet behövs');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setCount(result.assets.length);
      router.push({
        pathname: '/upload/preview',
        params: { images: JSON.stringify(result.assets.map(a => a.uri)) },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sälj snabbt</Text>
      <Text style={styles.subtitle}>
        Fota eller välj bilder –