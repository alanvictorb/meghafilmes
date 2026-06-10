
import {
  FlatList,
  Text,
  TextInput,
  View,
} from 'react-native';

import MovieCard from '../components/moviecard';
import filmes from '../constants/filmes';
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
