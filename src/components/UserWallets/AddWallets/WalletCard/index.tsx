import { FC } from 'react';
import {
  CardSystemImg,
  CardText,
  CardWrapper,
  Container,
  NumberText,
} from './styles';

interface IProps {
  wallet: any;
  onPress?: (product: any) => void;
}

const UserWallets: FC<IProps> = ({ wallet, onPress }) => {
  const handlePress = () => {
    onPress && onPress(wallet);
  };
  return (
    <Container cardSystem={wallet.cardSystem} onPress={handlePress}>
      <CardWrapper>
        <CardText cardSystem={wallet.cardSystem}>Банковаская карта</CardText>
        <NumberText cardSystem={wallet.cardSystem}>
          •• {wallet.cardNumber.substring(wallet.cardNumber.length - 4)}
        </NumberText>
      </CardWrapper>
      <CardWrapper>
        <CardSystemImg source={require('../../../../../assets/mir.png')} />
        <NumberText cardSystem={wallet.cardSystem}>
          {wallet.expiryВate}
        </NumberText>
      </CardWrapper>
    </Container>
  );
};

export default UserWallets;
