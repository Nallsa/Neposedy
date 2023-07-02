import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  margin: 65px auto 0 auto;
  align-items: center;
`;

export const WrapperElement = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;

export const TextTitle = styled.Text`
  font-size: 24px;
  font-family: Gilroy;
  line-height: 26px;
  margin-left: 10px;
`;

export const WalletImage = styled.ImageBackground`
  width: 290px;
  height: 220px;
  overflow: hidden;
  margin: 130px 0 20px 30px;
`;

export const TextDisc = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: Gilroy;
  margin-bottom: 150px;
`;

export const BoldText = styled.Text`
  font-size: 20px;
  font-family: Gilroy-Bold;
`;

export const WalletListWrapper = styled.FlatList`
  margin: 0 auto;
  margin-bottom: 85px;
`;
