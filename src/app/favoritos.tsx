import { FlatList, Text, View } from 'react-native';

import MovieCard from '../components/moviecard';
import favoritos from '../constants/favoritos';
import filmes from '../constants/Filmes';
import styles from '../constants/styles';

export default function Favoritos() {
  const filmesFavoritos = filmes.filter((filme) =>
    favoritos.includes(filme.id)
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#FFF',
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        ❤️ Filmes Favoritos
      </Text>

      <FlatList
        data={filmesFavoritos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: any) => (
          <MovieCard filme={item} />
        )}
        numColumns={4}
        columnWrapperStyle={{
          justifyContent:
            filmesFavoritos.length < 4
              ? 'center'
              : 'space-around',
        }}
      />
    </View>
  );
}