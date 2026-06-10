import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';
import styles from '../constants/styles';

type FilmeProps = {
  filme: {
    id: string;
    titulo: string;
    nota: string;
    imagem: string;
  };
};

export default function MovieCard({
  filme,
}: FilmeProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: filme.imagem }}
        style={styles.imagem}
      />

      <View style={styles.info}>
        <Text style={styles.nome}>
          {filme.titulo}
        </Text>

        <Text style={styles.nota}>
          ⭐ {filme.nota}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() =>
            router.push({
              pathname: '/detalhes',
              params: {
                titulo: filme.titulo,
                nota: filme.nota,
                imagem: filme.imagem,
              },
            })
          }
        >
          <Text style={styles.textoBotao}>
            Ver Detalhes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}