import { useState } from 'react';
import {
  FlatList,
  Image,
  TextInput,
  View,
} from 'react-native';

import MovieCard from '../components/moviecard';
import filmes from '../constants/filmes';
import styles from '../constants/styles';

export default function App() {
  const [pesquisa, setPesquisa] = useState('');

  const filmesFiltrados = filmes.filter((filme) =>
  filme.titulo.toLowerCase().startsWith(pesquisa.toLowerCase())
);
return (
  <View style={styles.container}>
<Image
source={require('../imagens/Logo.png')}
  style={styles.logoImagem}
  resizeMode="contain"
/>

      <TextInput
        placeholder="Pesquisar filme..."
        placeholderTextColor="#999"
        style={styles.pesquisa}
        value={pesquisa}
        onChangeText={setPesquisa}
      />

     <FlatList
  data={filmesFiltrados}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <MovieCard filme={item} />
  )}
  numColumns={4}
  columnWrapperStyle={{
    justifyContent:
      filmesFiltrados.length < 4
        ? 'center'
        : 'space-around',
  }}
/>

    </View>
  );
}