import styled from 'styled-components/native';

interface IProps {
  cardSystem?: string;
}
enum CardSystem {
  mir = 'mir',
  visa = 'visa',
  mastercard = 'mastercard',
}

export const Container = styled.TouchableOpacity`
  height: 130px;
  width: 343px;
  border-radius: 16px;
  // background-color: rgba(75, 170, 252, 1);

  ${({ cardSystem }: IProps) => {
    if (cardSystem?.toLowerCase() === CardSystem.mir)
      return `background-color: rgba(75, 170, 252, 1);`;

    if (cardSystem?.toLowerCase() === CardSystem.mastercard)
      return `background-color: rgba(154, 208, 89, 1);`;

    if (cardSystem?.toLowerCase() === CardSystem.visa)
      return `background-color: rgba(253, 207, 52, 1);`;
  }}
  // padding: 16px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const CardWrapper = styled.View`
  // align-items: center;
  // justify-content: space-between;

  margin: 0 20px;
`;

export const CardText = styled.Text`
  ${({ cardSystem }: IProps) =>
    cardSystem?.toLowerCase() === CardSystem.mir
      ? `color: rgba(255, 255, 255, 0.6);`
      : `color: black;`}

  font-family: Gilroy;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.34px;
  margin-bottom: 25px;
`;

export const NumberText = styled.Text`
  ${({ cardSystem }: IProps) =>
    cardSystem?.toLowerCase() === CardSystem.mir
      ? `color: rgba(255, 255, 255, 0.6);`
      : `color: black;`}
  font-family: Gilroy;
  font-size: 24px;
`;

export const CardSystemImg = styled.ImageBackground`
  width: 40px;
  height: 12px;

  margin-bottom: 24px;
  margin-left: 22px;
`;
