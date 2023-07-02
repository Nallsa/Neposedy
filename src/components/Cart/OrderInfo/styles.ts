import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../../styles/theme/colors';

export const Container = styled.SafeAreaView`
  margin-bottom: 20px;
`;

export const DeliveryTypeContainer = styled.View`
  width: 343px;
  height: 45px;
  border: 0.5px solid rgba(4, 6, 19, 0.1);
  border-radius: 50px;
  flex-direction: row;
  margin-top: 16px;
`;

interface IProps {
  active?: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<IProps>`
  height: 44px;
  width: ${Dimensions.get('window')?.width / 2 - 20}px;
  border-radius: 50px;
  /* background-color: ${Colors?.White}; */
  /* flex-direction: row; */
  border: ${({ active }: IProps) =>
    active ? `1px solid ${Colors?.Accent}` : 'none'};
  background-color: ${({ active }: IProps) =>
    active ? Colors?.White : 'transparent'};
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  /* min-width: 70px; */
`;

export const ButtonText = styled.Text<IProps>`
  font-size: 16px;
  font-family: Gilroy;
  color: ${({ active }: IProps) => (active ? Colors.Text : Colors.Gray)};
`;

export const AddressText = styled.Text`
  font-size: 16px;
  font-family: Gilroy;
  color: ${Colors.Text};
`;

export const AddressContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  margin-top: 16px;
  align-items: center;
`;
