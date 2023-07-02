import { FC, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ProductsListWrapper } from './styles';
import ProductCard from '../ProductCard';
import ProductModal from '../ProductModal';
import { SwipeListView } from 'react-native-swipe-list-view';

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
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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

const ProductsList: FC = () => {
  const [open, setOpen] = useState(null);

  const handleActive = (product: any) => {
    setOpen(product);
  };

  const onClose = () => {
    setOpen(null);
  };

  return (
    <>
      <ProductsListWrapper
        horizontal={false}
        data={products}
        keyExtractor={(item: any, index: number) => index.toString()}
        numColumns={2}
        renderItem={({ item, index }: { item: any; index: number }) => (
          <ProductCard product={item} onPress={handleActive} />
        )}
      />

      <ProductModal open={open} onClose={onClose} />
    </>
  );
};

export default ProductsList;
