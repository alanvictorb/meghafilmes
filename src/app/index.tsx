import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';

const filmes = [
  {
    id: '1',
    titulo: 'Homem-Aranha',
    nota: '9.0',
    imagem:
      'https://upload.wikimedia.org/wikipedia/pt/9/99/Spider-Man_Poster.jpg',
  },
  {
    id: '2',
    titulo: 'Batman',
    nota: '8.7',
    imagem:
      'https://upload.wikimedia.org/wikipedia/pt/2/22/The_Batman_poster.jpg',
  },
  {
    id: '3',
    titulo: 'Vingadores',
    nota: '9.5',
    imagem:
      'https://upload.wikimedia.org/wikipedia/pt/f/f9/TheAvengers2012Poster.jpg',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MegaFilmes</Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.imagem }}
              style={styles.imagem}
            />

            <Text style={styles.nome}>
              {item.titulo}
            </Text>

            <Text style={styles.nota}>
              ⭐ Nota: {item.nota}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  titulo: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },

  imagem: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },

  nome: {
    color: 'white',
    fontSize: 22,
    marginTop: 10,
    fontWeight: 'bold',
  },

  nota: {
    color: 'gold',
    fontSize: 18,
    marginTop: 5,
  },
});


