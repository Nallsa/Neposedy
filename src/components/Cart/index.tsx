import { FC } from 'react';
import { ButtonText, CartList, Container, DeleteCartImage } from './styles';
import { Row, Title } from '../styles';
import { Animated, ScrollView, TouchableOpacity, View } from 'react-native';
import CartItem from './CartItem';
import Button from '../buttons/Button';
import Recommendations from '../Recommendations';
import OrderInfo from './OrderInfo';
import { StyleSheet, Text } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { FontAwesome } from '@expo/vector-icons';

const products = [
  {
    id: 1,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
  {
    id: 2,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
  {
    id: 3,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
  {
    id: 4,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
  {
    id: 5,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
];

const Cart: FC = () => {
  const renderHiddenItem = () => {
    return (
      <View style={styles.rowBack}>
        <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
          <FontAwesome
            name='trash-o'
            size={24}
            color='
rgba(255, 255, 255, 1)'
            style={{ paddingRight: 13 }}
          />
        </View>
      </View>
    );
  };

  const renderItem = (data: { item: { id: any } }) => {
    return <CartItem product={data.item} />;
  };

  return (
    <Container>
      <Row>
        <Title>Корзина</Title>

        <Button>
          <ButtonText>Всего позиций {products?.length}</ButtonText>
        </Button>
      </Row>

      <ScrollView>
        <SwipeListView
          horizontal={false}
          data={products}
          keyExtractor={(item: any, index: number) => index.toString()}
          renderHiddenItem={renderHiddenItem}
          renderItem={renderItem}
          rightOpenValue={-80}
          disableRightSwipe
          stopRightSwipe={-120}
          scrollEnabled={false}
        />
      </ScrollView>

      <Recommendations />

      <OrderInfo />
    </Container>
  );
};

export default Cart;

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    margin: 5,
    right: 35,
    bottom: 10,

    marginBottom: 15,
  },
  backRightBtn: {
    backgroundColor: '#FF0000',

    alignItems: 'flex-end',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',

    top: 5,
    width: 155,
    paddingRight: 17,
  },

  backRightBtnRight: {
    backgroundColor: '#FF0000',
    right: 0.2,
    height: 70,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
});
