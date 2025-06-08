import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Dashboard');
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' }}>
      <Text style={{ color:'#1E88E5', fontSize: 28, fontWeight: 'bold' }}>FonteViva</Text>
      <ActivityIndicator color="#fff" size="large" style={{ marginTop: 20 }} />
    </View>
  );
}
