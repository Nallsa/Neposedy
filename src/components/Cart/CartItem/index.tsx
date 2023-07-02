import { FC, useState } from 'react';
import {
  CartProductTitle,
  ProductImage,
  Container,
  ProductQtyContainer,
  QTY,
  PriceContainer,
  Price,
  Column,
} from './styles';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../../../styles/theme/colors';
import { Animated } from 'react-native';

interface IProps {
  product: any;
}

const CartItem: FC<IProps> = ({ product }) => {
  const [count, setCount] = useState<number>(0);

  const handleCounter = (type: 'increment' | 'decrement') => {
    setCount(prev => (type === 'increment' ? ++prev : prev <= 0 ? 0 : --prev));
  };

  return (
    <Container>
      <ProductImage
        source={require('../../../../assets/demo/demo_product.png')}
        imageStyle={{ borderRadius: 10 }}
      />
      <Column>
        <CartProductTitle numberOfLines={1}>{product.title}</CartProductTitle>

        <PriceContainer>
          <Price>{product.price}₽</Price>
        </PriceContainer>
      </Column>
      <ProductQtyContainer>
        <Entypo
          name='minus'
          size={24}
          color='black'
          onPress={() => handleCounter('decrement')}
        />
        <QTY>{count}</QTY>
        <Entypo
          name='plus'
          size={24}
          color={Colors.Accent}
          onPress={() => handleCounter('increment')}
        />
      </ProductQtyContainer>
    </Container>
  );
};

export default CartItem;
