import { FC } from 'react';
import { Container, ProductImage, ProductPrice, ProductTitle } from './styles';
import { View, StyleSheet } from 'react-native';
import PriceButton from '../../buttons/PriceButton';

interface IProps {
  product: any;
  onPress?: (product: any) => void;
}

const RecommendationCard: FC<IProps> = ({ product, onPress }) => {
  const handlePress = () => {
    onPress && onPress(product);
  };
  return (
    <Container style={styles.containerStyle} onPress={handlePress}>
      <ProductImage
        source={require('../../../../assets/demo/demo_product.png')}
        imageStyle={{ borderRadius: 10 }}
      />
      <View>
        <ProductTitle>{product?.title}</ProductTitle>
      </View>

      <PriceButton>
        <ProductPrice>{product?.price} ₽</ProductPrice>
      </PriceButton>
    </Container>
  );
};

export default RecommendationCard;

const styles = StyleSheet.create({
  containerStyle: {
    shadowColor: '#2e2d2d63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 7,
  },
});
