import { FC, PropsWithChildren, ReactNode } from 'react';
import { ButtonText, Container } from './style';
import { PressableProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

interface IProps extends PressableProps {
  children?: ReactNode;
  style?: Object;
}

const GoBackButton: FC<PropsWithChildren<IProps>> = ({ children, style }) => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.goBack()} style={style}>
      <ButtonText>
        <AntDesign name='left' size={24} color='black' />
      </ButtonText>
    </Container>
  );
};

export default GoBackButton;
