import { InputSearch } from './../../../SearchProducts/styles';
import { InputContainer } from './../../../UserInfo/EditUser/styles';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../../../styles/theme/colors';

export const Container = styled.View`
  background-color: ${Colors.White};
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  padding: 15px;
  overflow: hidden;
`;

export const ProductImage = styled.ImageBackground`
  width: ${Dimensions.get('window')?.width - 32}px;
  height: ${Dimensions.get('window')?.width - 32}px;
  overflow: hidden;
`;

export const WalletTitle = styled.Text`
  text-align: center;
  font-family: Gilroy;
  font-size: 26px;
  color: ${Colors.Text};
  margin-bottom: 55px;
`;

export const CardText = styled.Text`
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.34px;
`;
export const CardWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputWrapper = styled.SafeAreaView``;
export const Input = styled.TextInput`
  width: 303px;
  height: 50px;
  border: 1px black;
`;
