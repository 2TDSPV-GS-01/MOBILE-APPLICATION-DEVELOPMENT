import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HelpScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FonteViva</Text>
      <Text style={styles.subtitle}>Ajuda</Text>

      <Text style={styles.text}>
        O aplicativo exibe dados capturados por sensores de qualidade da água. Veja a seguir como interpretar as informações:
      </Text>

      <Text style={styles.text}>
        • <Text style={styles.label}>pH:</Text> Mede a acidez ou alcalinidade da água. Valores ideais estão entre 6,5 e 8,5.
      </Text>

      <Text style={styles.text}>
        • <Text style={styles.label}>Turbidez:</Text> Indica a quantidade de partículas em suspensão na água. Quanto menor, mais limpa está a água.
      </Text>

      <Text style={styles.text}>
        • <Text style={styles.label}>Temperatura:</Text> A temperatura da água influencia a solubilidade de oxigênio e a saúde dos organismos aquáticos.
      </Text>

      <Text style={styles.text}>
        Esses dados são essenciais para monitorar a qualidade da água, detectar contaminações e tomar decisões mais seguras.
      </Text>

      <Text style={styles.text}>
        Caso tenha dúvidas, sugestões ou precise de suporte, entre em contato conosco:
      </Text>

      <Text style={styles.text}>
        📧 Email: suporte@fonteviva.com.br
      </Text>
      <Text style={styles.text}>
        ☎️ Telefone: (11) 4002-8922
      </Text>
      <Text style={styles.text}>
        🌐 Site: www.fonteviva.com.br
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
    marginBottom: 20,
    marginTop: 24,
  },
  label: {
    fontWeight: 'bold',
    color: '#90CAF9',
  },
  text: {
    color: '#e0e0e0',
    fontSize: 16,
    marginBottom: 14,
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
