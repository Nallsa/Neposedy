import styled from 'styled-components/native';
import { Colors } from '../../../styles/theme/colors';

interface IProps {
  big?: boolean;
  outlined?: boolean;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<IProps>`
  height: 44px;
  width: 44px;
  border-radius: 16px;
  // background-color: ${Colors?.White};
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<IProps>`
  font-size: 16px;
  font-family: Gilroy;
  color: ${Colors.Text};
`;
