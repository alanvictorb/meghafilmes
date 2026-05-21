
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  logo: {
    color: '#E50914',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  pesquisa: {
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 10,
    color: 'white',
    marginBottom: 20,
  },

  subtitulo: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },

  imagem: {
    width: '100%',
    height: 400,
  },

  info: {
    padding: 15,
  },

  nome: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  nota: {
    color: '#FFD700',
    fontSize: 18,
    marginTop: 5,
  },

  botao: {
    backgroundColor: '#E50914',
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;

