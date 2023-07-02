import { FC } from 'react';
import {
  Container,
  ProductImage,
  ProductLike,
  ProductPrice,
  ProductSubTitle,
  ProductTitle,
} from './styles';
import { StyleSheet, View } from 'react-native';
import PriceButton from '../buttons/PriceButton';

interface IProps {
  product?: any;
  onPress?: (product: any) => void;
}

const ProductCard: FC<IProps> = ({ product, onPress }) => {
  const handlePress = () => {
    onPress && onPress(product);
  };
  return (
    <Container style={styles.containerStyle} onPress={handlePress}>
      <ProductLike source={require('../../../assets/heartFalse.svg')} />
      <ProductImage
        source={require('../../../assets/demo/demo_product.png')}
        imageStyle={{ borderRadius: 10 }}
      />
      <View>
        <ProductTitle>Название блюда</ProductTitle>
        <ProductSubTitle>210г 6001 ккал</ProductSubTitle>
      </View>

      <PriceButton>
        <ProductPrice>199 ₽</ProductPrice>
      </PriceButton>
    </Container>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  containerStyle: {
    shadowColor: '#2e2d2d63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 7,
  },
});
