import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {
  router,
  useLocalSearchParams,
} from 'expo-router';

import filmes from '../constants/Filmes';
import styles from '../constants/styles';
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
  <View style={{ flex: 1 }}>
    <Pressable
      onPress={() => router.back()}
      style={{
        backgroundColor: '#E50914',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginBottom: 20,
        marginLeft: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: '#FFF',
          fontWeight: 'bold',
        }}
      >
        Voltar
      </Text>
    </Pressable>

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
  </View>
);
}

