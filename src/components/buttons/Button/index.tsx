import { FC, PropsWithChildren, ReactNode } from 'react';
import { ButtonText, Container } from './style';
import {
  Pressable,
  PressableProps,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

interface IProps extends PressableProps {
  children?: ReactNode;
  style?: Object;
  big?: boolean;
  outlined?: boolean;
  navigation?: any;
  navigationPath?: string;
  icon?: ReactNode;
}

const Button: FC<PropsWithChildren<IProps>> = ({
  children,
  style,
  big = false,
  outlined = false,
  navigation,
  navigationPath,
  icon,
}) => {
  return (
    <Container
      onPress={() =>
        navigationPath ? navigation.navigate(navigationPath) : null
      }
      style={style}
      big={big}
      outlined={outlined}
    >
      {icon}
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
