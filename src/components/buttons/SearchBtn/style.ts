import styled from 'styled-components/native';


import { Colors } from '../../../styles/theme/colors';
import { Link, NavigationContainer } from '@react-navigation/native';

interface IProps {
  height?: number;
}

export const Container = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  border-radius: 16px;
  background-color: ${Colors?.White};
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
`;
