import { useLocalSearchParams } from 'expo-router';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Detalhes() {

  const {
    titulo,
    nota,
    imagem,
  } = useLocalSearchParams();

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: imagem as string }}
        style={styles.imagem}
      />

      <Text style={styles.texto}>
        {titulo}
      </Text>

      <Text style={styles.nota}>
        ⭐ {nota}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  imagem: {
    width: 300,
    height: 400,
    borderRadius: 20,
    marginBottom: 20,
  },

  texto: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },

  nota: {
    color: 'gold',
    fontSize: 24,
    marginTop: 10,
  },
});



