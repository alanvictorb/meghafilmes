import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import { router } from 'expo-router';
import { useState } from 'react';

import favoritos from '../constants/favoritos';
import styles from '../constants/styles';

type FilmeProps = {
  filme: any;
};

export default function MovieCard({
  filme,
}: FilmeProps) {
  const { width } = useWindowDimensions();

  const mobile = width < 768;

  const [favorito, setFavorito] = useState(
    favoritos.includes(filme.id)
  );

  if (!filme) {
    return null;
  }

  function alternarFavorito() {
    if (favorito) {
      const index = favoritos.indexOf(filme.id);

      if (index > -1) {
        favoritos.splice(index, 1);
      }

      setFavorito(false);
    } else {
      favoritos.push(filme.id);
      setFavorito(true);
    }
  }

return (
  <TouchableOpacity
    style={[
      styles.card,
      mobile && {
        width: 120,
        marginHorizontal: 2,
      },
    ]}
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
    <View
      style={[
        styles.posterContainer,
        mobile && {
          width: 120,
          height: 180,
        },
      ]}
    >
      <Image
        source={{ uri: filme.imagem }}
        style={[
          styles.imagem,
          mobile && {
            height: 180,
          },
        ]}
        resizeMode="cover"
      />

      <Pressable
        onPress={alternarFavorito}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: 'rgba(0,0,0,0.7)',
          padding: 6,
          borderRadius: 20,
        }}
      >
        <Text style={{ fontSize: 20 }}>
          {favorito ? '❤️' : '🤍'}
        </Text>
      </Pressable>
    </View>

    <Text style={styles.nome}>
      {filme.titulo}
    </Text>
  </TouchableOpacity>
);
}