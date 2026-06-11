import { useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

import { router } from 'expo-router';

import MovieCard from '../components/moviecard';
import filmes from '../constants/filmes';
import styles from '../constants/styles';

export default function App() {
  const [pesquisa, setPesquisa] = useState('');

  const filmesFiltrados = pesquisa.trim()
    ? filmes.filter((filme) =>
        filme.titulo
          .toLowerCase()
          .startsWith(pesquisa.toLowerCase())
      )
    : filmes;

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

     <Pressable
  onPress={() => router.push('/favoritos')}
  style={{
    backgroundColor: '#E50914',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginBottom: 15,
  }}
>
  <Text
    style={{
      color: '#FFF',
      fontWeight: 'bold',
    }}
  >
    ❤️ Favoritos
  </Text>
</Pressable>

      <FlatList
        data={filmesFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: any) => (
          <MovieCard filme={item} />
        )}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent:
            filmesFiltrados.length < 4
              ? 'center'
              : 'space-around',
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
    </View>
  );
}