import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const Container = styled.SafeAreaView`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #fff;
  border-radius: 16px;
  width: ${Dimensions.get('window')?.width - 40}px;
  height: 70px;
`;

export const ProductImage = styled.ImageBackground`
  width: 70px;
  height: 70px;
  overflow: hidden;
`;

export const CartProductTitle = styled.Text`
  font-size: 18px;
  font-family: Gilroy;
  color: ${Colors.Text};
`;

export const ProductQtyContainer = styled.View`
  border-radius: 16px;
  width: 94px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border: 0.5px solid rgba(4, 6, 19, 0.1);
  padding: 0 5px;
  margin-right: 10px;
`;

export const QTY = styled.Text`
  font-family: Gilroy;
  font-size: 18px;
  color: ${Colors.Text};
`;

export const PriceContainer = styled.View`
  border-radius: 16px;
  min-width: 50px;
  height: 35px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 0.5px solid rgba(4, 6, 19, 0.1);
  padding: 0 5px;
`;

export const Column = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Price = styled.Text`
  font-family: Gilroy;
  font-size: 18px;
  color: ${Colors.Text};
`;
