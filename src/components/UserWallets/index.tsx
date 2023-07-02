import { FC } from 'react';
import { Container, WalletQuantity, WalletText } from './styles';
import { Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { Ionicons } from '@expo/vector-icons';

const UserWallets: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const wallets = [];

  return (
    <Container
      onStartShouldSetResponder={() => navigation.navigate('AddWallets')}
    >
      <Ionicons
        name='wallet-outline'
        size={24}
        color='black'
        style={{ marginBottom: 10 }}
      />
      <WalletText>Карты</WalletText>
      <WalletQuantity>
        {wallets.length === 0
          ? 'Добавить карты'
          : `Кол-во карт ${wallets.length} `}
      </WalletQuantity>
    </Container>
  );
};

export default UserWallets;
