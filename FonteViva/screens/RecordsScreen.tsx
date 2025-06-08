import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../services/api';

export default function RecordsScreen({ navigation }: any) {
  const [records, setRecords] = useState([]);

  const loadData = async () => {
    try {
      const res = await api.get('/');
      setRecords(res.data);
    } catch (err) {
      console.error('Erro ao carregar registros:', err);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadData);
    return unsubscribe;
  }, [navigation]);

  const deleteRecord = async (id: string) => {
    try {
      await api.delete(`/${id}`);
      loadData();
    } catch (err) {
      console.error('Erro ao excluir registro:', err);
    }
  };

  const getSensorLabel = (idSensor: number) => {
    switch (idSensor) {
      case 11: return 'pH';
      case 12: return 'Turbidez';
      case 13: return 'Temperatura';
      case 14: return 'Nível';
      default: return `Sensor ${idSensor}`;
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.label}>{getSensorLabel(item.idSensor)}: <Text style={styles.value}>{item.resultado}</Text></Text>
      <Text style={styles.date}>Data: {new Date(item.dtRegistro).toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registros</Text>

      <FlatList
        data={records}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />

      {/* Botões fixos na parte inferior */}
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#666' }]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderColor: '#333',
    borderWidth: 1,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
  value: {
    fontWeight: 'bold',
    color: '#90CAF9',
  },
  date: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#1E88E5',
    padding: 10,
    borderRadius: 12,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#E53935',
    padding: 10,
    borderRadius: 12,
    flex: 1,
    marginLeft: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 16,
  },
  actionButton: {
    backgroundColor: '#1E88E5',
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
});
