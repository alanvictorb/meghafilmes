import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#0F0F0F',
  paddingTop: 0,
  paddingHorizontal: 20,
},
 logoImagem: {
  width: '100%',
  maxWidth: 500,
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
  maxWidth: 180,
  marginBottom: 20,
  marginHorizontal: 5,
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

  footer: {
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
  },

  footerTitulo: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  footerTexto: {
    color: '#AAA',
    fontSize: 12,
    textAlign: 'center',
  },


  content: {
  padding: 20,
  alignItems: 'center',
},

titulo: {
  color: '#FFF',
  fontSize: 32,
  fontWeight: 'bold',
  textAlign: 'center',
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







export default styles;