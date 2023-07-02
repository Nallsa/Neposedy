import { FC } from 'react';
import { AdressQuantity, AdressText, Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const UserAdresses: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const adresses = [];

  return (
    <Container
      onStartShouldSetResponder={() => navigation.navigate('EditUser')}
    >
      <MaterialCommunityIcons
        name='home-edit-outline'
        size={29}
        color='black'
        style={{ marginBottom: 8 }}
      />
      <AdressText>Адреса</AdressText>
      <AdressQuantity>
        {adresses.length === 0
          ? 'Добавить адресы'
          : `Кол-во адресов ${adresses.length} `}
      </AdressQuantity>
    </Container>
  );
};

export default UserAdresses;
