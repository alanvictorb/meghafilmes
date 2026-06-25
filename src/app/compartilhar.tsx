import {
  Alert,
  Button,
  Pressable,
  Share,
  Text,
  View,
} from 'react-native';

import { router } from 'expo-router';

import styles from '../constants/styles';

export default function Compartilhar() {
  const onShare = async () => {
    try {
      await Share.share({
        message:
          'Confira o MegaFilmes! 🎬 Projeto desenvolvido em React Native.',
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <Pressable
        onPress={() => router.back()}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          backgroundColor: '#E50914',
          padding: 10,
          borderRadius: 10,
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

      <Button
        title="Compartilhar MegaFilmes"
        onPress={onShare}
      />
    </View>
  );
}