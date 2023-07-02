import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../styles/theme/colors';

export const Container = styled.View`
  /* height: 100px; */
  /* width: ${Dimensions.get('window')?.width - 40}px; */

  flex-direction: column;
  margin-top: 65px;
  margin-left: 20px;
`;
export const WrapperElement = styled.View`
  flex-direction: row;

  margin-bottom: 20px;
`;

export const InputSearch = styled.TextInput`
  width: 283px;
  height: 44px;
  font-size: 16px;
  font-family: Gilroy;
  padding: 12px;
`;

export const TextElement = styled.Text`
  font-size: 16px;
  color: #040613;
  margin-bottom: 5px;
`;

export const ProductsNameList = styled.FlatList`
  flex-direction: row;
`;

export const ProductsNameView = styled.View`
  min-width: 106px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border: 1px rgba(4, 6, 19, 0.1);
  border-radius: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  overflow: hidden;
  margin: 10px 0;
`;

export const ViewChild = styled.Text`
  font-size: 16px;
  font-family: Gilroy;
`;

export const SearchResult = styled.Text`
  font-size: 24px;
  font-family: Gilroy;
  margin-bottom: 10px;
`;
