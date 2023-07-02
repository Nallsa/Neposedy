import { FC, useState } from 'react';
import {
  BoldText,
  Container,
  TextDisc,
  TextTitle,
  WalletImage,
  WalletListWrapper,
  WrapperElement,
} from './styles';
import GoBackButton from '../../buttons/GoBackButton';
import { View, Text } from 'react-native';
import Button from '../../buttons/Button';
import { Ionicons } from '@expo/vector-icons';
import WalletCard from './WalletCard';
import WalletModal from './WalletModal';

const AddWallets: FC = () => {
  const wallets = [
    {
      cardNumber: '0000 0000 0000 5432',
      cardSystem: 'mir',
      expiryВate: '02/25',
    },
    {
      cardNumber: '0000 0000 0000 5555',
      cardSystem: 'visa',
      expiryВate: '02/25',
    },
    {
      cardNumber: '0000 0000 0000 4130',
      cardSystem: 'masterCard',
      expiryВate: '02/25',
    },
  ];

  const [open, setOpen] = useState(null);

  const handleActive = (product: any) => {
    setOpen(product);
  };

  const onClose = () => {
    setOpen(null);
  };

  if (wallets.length === 0) {
    return (
      <Container>
        <WrapperElement>
          <GoBackButton />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextTitle>Ваши карты</TextTitle>
          </View>
        </WrapperElement>

        <WalletImage source={require('../../../../assets/Wallet.png')} />
        <TextDisc>
          Добавьте карту, чтобы заказывать стало{' '}
          <BoldText>еще комфортнее!</BoldText>
        </TextDisc>
        <Button
          big
          outlined
          style={{
            borderColor: 'rgba(4, 6, 19, 0.1)',
            backgroundColor: 'transparent',
            width: 343,
          }}
          icon={<Ionicons name='add' size={24} color='black' />}
        >
          Добавить карту
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <WrapperElement>
        <GoBackButton />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextTitle>Ваши карты</TextTitle>
        </View>
        <Button
          style={{
            minWidth: 105,
            marginLeft: 55,
            backgroundColor: 'rgba(253, 207, 52, 1)',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 5,
            }}
          >
            <Text>Всего карт {wallets.length}</Text>
          </View>
        </Button>
      </WrapperElement>
      <WalletListWrapper
        data={wallets}
        keyExtractor={(item: any, index: number) => index.toString()}
        renderItem={({ item }: { item: any }) => (
          <WalletCard wallet={item} onPress={handleActive} />
        )}
      />

      <WalletModal open={open} onClose={onClose} />

      <Button
        big
        style={{
          width: 343,
        }}
        icon={<Ionicons name='add' size={24} color='black' />}
      >
        Добавить карту
      </Button>
    </Container>
  );
};

export default AddWallets;
