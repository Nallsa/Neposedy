import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../styles/theme/colors';

export const Container = styled.View`
  height: 100px;
  width: ${Dimensions.get('window')?.width - 40}px;
  border-radius: 16px;
  border: 0.5px solid rgba(4, 6, 19, 0.1);
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-family: Gilroy;
  color: ${Colors.Text};
`;

export const UserData = styled.Text`
  font-size: 17px;
  font-family: Gilroy;
  color: ${Colors.Gray};
`;

export const UserAvatar = styled.ImageBackground`
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 90px;
`;
