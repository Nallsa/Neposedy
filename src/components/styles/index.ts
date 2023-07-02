import styled from 'styled-components/native';
import { Colors } from '../../styles/theme/colors';

export const Title = styled.Text`
  /* text-transform: uppercase; */
  font-family: Gilroy;
  font-size: 24px;
  line-height: 30px;
  color: ${Colors.Text};
  /* font-weight: 800; */
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
  margin-bottom: 10px;
`;

export const Column = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const OrdersWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

export const NotFoundText = styled.Text`
  font-family: Gilroy;
  font-size: 24px;
  line-height: 30px;
  color: ${Colors.Gray};
`;

export const Divider = styled.View`
  background-color: rgba(4, 6, 19, 0.1);
  height: 0.5px;
  width: 100%;
`;
