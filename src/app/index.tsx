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
import filmes from '../constants/Filmes';
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

<View
  style={{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginBottom: 15,
  }}
>
  <Pressable
    onPress={() => router.push('/favoritos')}
    style={{
      backgroundColor: '#E50914',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
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

  <Pressable
    onPress={() => router.push('/compartilhar')}
    style={{
      backgroundColor: '#444',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    }}
  >
    <Text
      style={{
        color: '#FFF',
        fontWeight: 'bold',
      }}
    >
      📤 Compartilhar
    </Text>
  </Pressable>
</View>

<FlatList
  data={filmesFiltrados}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <MovieCard filme={item} />
  )}
  numColumns={4}
  columnWrapperStyle={{
    justifyContent: 'space-around',
  }}
  ListFooterComponent={
    <View style={styles.footer}>
      <Text style={styles.footerTitulo}>
        MegaFilmes © 2026
      </Text>

      <Text style={styles.footerTexto}>
        Desenvolvido por Henrique Alan
      </Text>

      <Text style={styles.footerTexto}>
        Projeto Escolar em React Native
      </Text>
    </View>
  }
/>

  </View>
);
  
}
