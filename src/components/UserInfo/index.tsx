import { FC } from 'react';
import { Container, UserAvatar, UserData, UserName } from './styles';
import { View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

const UserInfo: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container
      onStartShouldSetResponder={() => navigation.navigate('EditUser')}
    >
      <View style={{ gap: 5 }}>
        <UserName>Привет, Дима!</UserName>

        <UserData>+7 (999) 999 - 00 - 00</UserData>
        <UserData>pochta@domain.ru</UserData>
      </View>

      <UserAvatar
        source={require('../../../assets/demo/avatar.png')}
        imageStyle={{ borderRadius: 10 }}
        style={{ marginRight: 25 }}
      />

      <FontAwesome5
        name='edit'
        size={18}
        color='black'
        style={{
          marginBottom: 40,
          padding: 0,
          marginLeft: 0,
          right: 12,
          top: 12,
          position: 'absolute',
        }}
      />
    </Container>
  );
};

export default UserInfo;
