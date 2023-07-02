import styled from 'styled-components/native';
import { Colors } from '../../styles/theme/colors';

interface IProps {
  height?: number;
}

export const Container = styled.View`
  height: 80px;
  /* background-color: #000550; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 0 20px;
  margin-bottom: 10px;
  margin-top: 25px;
`;

export const Logo = styled.Image`
  width: 65px;
  height: 45px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  opacity: 0.6;
  line-height: 17px;
  font-size: 18px;
  font-family: Gilroy;
  font-weight: 500;
  color: ${Colors.Text};
`;
export const Name = styled.Text`
  line-height: 25px;
  font-family: Gilroy;
`;
