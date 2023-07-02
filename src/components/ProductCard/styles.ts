import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../styles/theme/colors';

export const Container = styled.TouchableOpacity`
  /* width: 167px; */
  width: ${Dimensions.get('window')?.width / 2 - 25}px;
  height: 275px;
  background-color: ${Colors.White};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 16px;
  overflow: hidden;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
`;

export const ProductLike = styled.ImageBackground`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 10px;
`;

export const ProductImage = styled.ImageBackground`
  width: 150px;
  height: 150px;
  overflow: hidden;
`;

export const ProductTitle = styled.Text`
  font-family: Gilroy;
  font-size: 16px;
  color: ${Colors.Text};
`;
export const ProductSubTitle = styled.Text`
  font-family: Gilroy;
  font-size: 12px;
  color: ${Colors.Gray};
`;

export const ProductPrice = styled.Text`
  font-family: Gilroy;
  font-size: 18px;
  color: ${Colors.Text};
`;
