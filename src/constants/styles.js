import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#0F0F0F',
  paddingTop: 0,
  paddingHorizontal: 20,
},
logoImagem: {
  width: 500,
  height: 110,
  alignSelf: 'center',
  marginBottom: 10,
},

  pesquisa: {
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#2A2A2A',
    padding: 14,
    borderRadius: 12,
    color: '#FFF',
    marginBottom: 20,
  },

  subtitulo: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

card: {
  width: 180,
  marginBottom: 20,
  marginHorizontal: 10,
},

  imagem: {
    width: '100%',
    height: 320,
    borderRadius: 12,
  },

  nome: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
    textAlign: 'center',
  },

  nota: {
    color: '#FFD700',
    fontSize: 13,
    marginTop: 4,
    textAlign: 'center',
  },

  posterContainer: {
    width: 180,
    height: 270,
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
  },

  notaContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 6,
  },
});

export default styles;