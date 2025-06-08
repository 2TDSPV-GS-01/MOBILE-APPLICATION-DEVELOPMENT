import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function AboutScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FonteViva</Text>
      <Text style={styles.subtitle}>Sobre o Aplicativo</Text>

      <Text style={styles.text}>
        O FonteViva é uma solução digital criada para monitorar a qualidade da água de forma contínua e acessível. Através de sensores físicos conectados, o aplicativo coleta dados em tempo real de parâmetros essenciais, como pH, turbidez e temperatura.
      </Text>

      <Text style={styles.text}>
        Esses dados são exibidos em uma interface clara e intuitiva, permitindo que usuários acompanhem as variações da água e identifiquem possíveis riscos ambientais ou de saúde. Com o FonteViva, é possível obter informações rápidas para ações preventivas ou corretivas em sistemas de abastecimento e monitoramento ambiental.
      </Text>

      <Text style={styles.text}>
        O app foi pensado para ser utilizado por comunidades, gestores públicos, organizações ambientais e todos que desejam contribuir com a preservação dos recursos hídricos. Simples, direto e informativo, ele transforma dados técnicos em conhecimento útil.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: '#1E88E5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginBottom: 24,
  },
  text: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: 18,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
