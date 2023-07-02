import { Colors } from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

interface IProps {
  width?: number;
  noPadding?: boolean;
}

export const Wrapper = styled.SafeAreaView<IProps>`
  background-color: ${Colors.White};
  // background-color: #fff;
  borderradius: 5;

  padding: ${({ noPadding }: IProps) =>
    noPadding ? '0 0 80px 0' : '0 20px 80px 20px'};
  width: ${({ width }: IProps) => (width ? `${width}px` : '100%')};

  margin-left: 15px;
  /* margin-bottom: 80px; */
  /* margin-top: 80px; */
`;
