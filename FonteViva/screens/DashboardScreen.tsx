import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, Text, ActivityIndicator, View, StyleSheet, TouchableOpacity } from 'react-native';
import SensorCard from '../components/SensorCard';
import api from '../services/api';

export default function DashboardScreen({ navigation }: any) {
  const [ph, setPh] = useState<any>(null);
  const [turbidez, setTurbidez] = useState<any>(null);
  const [temperatura, setTemperatura] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  const loadData = async () => {
    try {
      const res = await api.get('/');
      const dados = res.data.reverse();
      setPh(dados.find((r: any) => r.idSensor === 11));
      setTurbidez(dados.find((r: any) => r.idSensor === 12));
      setTemperatura(dados.find((r: any) => r.idSensor === 13));
      setErro(false);
    } catch (err) {
      console.error('Erro ao buscar leitura:', err);
      setErro(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#1E88E5" />
        <Text style={{ color: '#fff' }}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FonteViva</Text>
      <ScrollView>
        {erro ? (
          <Text style={styles.error}>Erro ao carregar dados da API.</Text>
        ) : (
          <>
            <SensorCard label="pH" value={ph?.resultado?.toString() || 'N/A'} />
            <SensorCard label="Turbidez" value={turbidez?.resultado?.toString() || 'N/A'} />
            <SensorCard label="Temperatura" value={temperatura?.resultado?.toString() || 'N/A'} />
          </>
        )}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Records')}>
          <Text style={styles.buttonText}>Ver Registros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>Sobre o Projeto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Help')}>
          <Text style={styles.buttonText}>Ajuda</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  center: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#1E88E5',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  error: {
    color: '#f55',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
