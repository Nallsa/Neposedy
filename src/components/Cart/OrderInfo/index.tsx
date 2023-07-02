import { FC, useState } from 'react';
import { Title } from '../../styles';
import {
  AddressContainer,
  AddressText,
  ButtonContainer,
  ButtonText,
  Container,
  DeliveryTypeContainer,
} from './styles';
import { Feather } from '@expo/vector-icons';
import Button from '../../buttons/Button';

const OrderInfo: FC = () => {
  const [delivery, setDelivery] = useState<boolean>(false);

  return (
    <Container>
      <Title>Получение</Title>

      <DeliveryTypeContainer>
        <ButtonContainer
          value={true}
          active={delivery}
          onPress={() => setDelivery(true)}
        >
          <ButtonText>Самовывоз</ButtonText>
        </ButtonContainer>
        <ButtonContainer
          value={false}
          active={!delivery}
          onPress={() => setDelivery(false)}
        >
          <ButtonText>Доставка</ButtonText>
        </ButtonContainer>
      </DeliveryTypeContainer>

      <AddressContainer>
        <Feather name='package' size={24} color='black' />
        <AddressText>Улица Фучика, 34</AddressText>
      </AddressContainer>
      <Button big style={{ marginTop: 30, width: 343 }}>
        К оформлению
      </Button>
    </Container>
  );
};

export default OrderInfo;
