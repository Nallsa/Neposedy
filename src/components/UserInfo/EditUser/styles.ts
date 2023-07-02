import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex-direction: column;
  margin: 65px auto 0 auto;
`;

export const WrapperElement = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const TextTitle = styled.Text`
  font-size: 24px;
  font-family: Gilroy;
  line-height: 26px;
`;

export const UserAvatar = styled.ImageBackground`
  width: 75px;
  height: 75px;
  overflow: hidden;
  border-radius: 90px;
  margin: auto;
  margin-bottom: 24px;
`;

export const InputContainer = styled.View`
  flex-direction: column;
  margin-bottom: 120px;
`;

export const InputUser = styled.TextInput`
  justify-content: 'center';
  align-items: 'center';
  padding: 15px;
  font-size: 14px;
  width: 343px;
  height: 50px;
  border: 1px rgba(4, 6, 19, 0.1);
  border-radius: 16px;
  margin-bottom: 16px;
`;
