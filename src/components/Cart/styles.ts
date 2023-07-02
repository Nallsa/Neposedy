import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../styles/theme/colors';

export const Container = styled.SafeAreaView`
  margin-bottom: 20px;
`;
export const DeleteCartImage = styled.ImageBackground`
  width: 18px;
  height: 18px;
`;

export const CartList = styled.FlatList`
  /* flex-direction: row; */
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: Gilroy;
`;
