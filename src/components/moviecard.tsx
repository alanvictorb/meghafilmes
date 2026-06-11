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

  if (!filme) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        router.push({
          pathname: '/detalhes',
          params: {
            id: filme.id,
          },
        })
      }
    >
      <View style={styles.posterContainer}>
        <Image
          source={{ uri: filme.imagem }}
          style={styles.imagem}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.nome}>
        {filme.titulo}
      </Text>

    
    </TouchableOpacity>
  );
}