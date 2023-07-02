import { FC, useState } from 'react';
import {
  CardText,
  CardWrapper,
  Container,
  Input,
  InputWrapper,
  WalletTitle,
} from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

import Button from '../../../buttons/Button';

interface IProps {
  wallet: any;
}

const WalletContent: FC<IProps> = ({}) => {
  return (
    <Container>
      <WalletTitle>Карта</WalletTitle>
      <CardWrapper>
        <CardText>Банковаская карта</CardText>
        <FontAwesome5 name='cc-visa' size={24} color='blue' />
      </CardWrapper>
      <InputWrapper>
        <Input
        // onChange={(text: string) =>
        //   setWallet({ ...wallet, cardNumber: text.replace(/[0-9]{4}/g, '') })
        // }
        // value={wallet.cardNumber}
        />
      </InputWrapper>
    </Container>
  );
};

export default WalletContent;
