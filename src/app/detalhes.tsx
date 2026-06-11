import { useLocalSearchParams } from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import filmes from '../constants/Filmes';

export default function Detalhes() {
  const { id } = useLocalSearchParams();
 console.log('ID recebido:', id);
  const filme = filmes.find(
  (item) => item.id === String(id)
);

  if (!filme) {
    return (
      <View style={styles.container}>
        <Text style={styles.erro}>
          Filme não encontrado
        </Text>
      </View>
    );
  }

return (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.content}
  >
    <Image
      source={{ uri: filme.imagem }}
      style={styles.imagem}
    />

    <Text style={styles.titulo}>
      {filme.titulo}
    </Text>

    <Text style={styles.nota}>
      ⭐ {filme.nota}
    </Text>

    <View style={styles.infoContainer}>
      <Text style={styles.info}>
        🎭 Gênero: {filme.genero}
      </Text>

      <Text style={styles.info}>
        📅 Ano: {filme.ano}
      </Text>

      <Text style={styles.info}>
        ⏱️ Duração: {filme.duracao}
      </Text>

      <Text style={styles.info}>
        🎬 Diretor: {filme.diretor}
      </Text>
    </View>

    <Text style={styles.sinopseTitulo}>
      Sinopse
    </Text>

    <Text style={styles.descricao}>
      {filme.descricao}
    </Text>
  </ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0B0B',
  },

  content: {
    padding: 20,
    alignItems: 'center',
  },

  imagem: {
    width: 280,
    height: 420,
    borderRadius: 20,
    marginBottom: 20,
  },

  titulo: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  nota: {
    marginTop: 10,
    backgroundColor: '#E50914',
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    overflow: 'hidden',
  },

  infoContainer: {
    width: '100%',
    backgroundColor: '#181818',
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
  },

  info: {
    color: '#FFF',
    fontSize: 17,
    marginBottom: 10,
  },

  sinopseTitulo: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  descricao: {
    color: '#CCC',
    fontSize: 16,
    lineHeight: 25,
    backgroundColor: '#181818',
    padding: 15,
    borderRadius: 15,
    width: '100%',
  },

  erro: {
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 100,
  },
});