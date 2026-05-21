import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
} from 'react-native';

import filmes from '../constants/filmes';
import MovieCard from '../components/MovieCard';
import styles from '../constants/styles';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>
        🎬 MegaFilmes
      </Text>

      <TextInput
        placeholder="Pesquisar filme..."
        placeholderTextColor="#999"
        style={styles.pesquisa}
      />

      <Text style={styles.subtitulo}>
        Filmes em destaque
      </Text>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard filme={item} />
        )}
      />

    </View>
  );
}

