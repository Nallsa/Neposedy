import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../styles/theme/colors';

export const Container = styled.View`
  height: 103px;
  width: 163px;
  border-radius: 16px;
  border: 1px solid rgba(4, 6, 19, 0.1);
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const WalletText = styled.Text`
  font-size: 17px;
  font-family: Gilroy;
  color: ${Colors.Text};
`;

export const WalletQuantity = styled.Text`
  font-size: 14px;
  font-family: Gilroy;
  color: ${Colors.Gray};
`;


