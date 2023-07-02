import styled from 'styled-components/native';
import { Colors } from '../../../styles/theme/colors';

interface IProps {
  big?: boolean;
  outlined?: boolean;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<IProps>`
  height: ${({ big }: IProps) => (big ? `60px` : `44px`)};
  border-radius: 50px;
  background-color: ${({ outlined }: IProps) =>
    outlined ? Colors?.White : Colors?.Accent};
  flex-direction: row;
  border: 1px solid ${Colors?.Accent};
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  color: ${Colors.Text};
  min-width: 70px;
  font-family: Gilroy;
`;

export const ButtonText = styled.Text<IProps>`
  font-size: 16px;
  font-family: Gilroy;
  color: ${Colors.Text};
`;
