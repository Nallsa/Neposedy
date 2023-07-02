import {FC, useState} from 'react'
import { RecommendationsList } from './styles'
import RecommendationCard from './RecommendationCard'
import { Title } from '../styles'
import { View } from 'react-native'
import ProductModal from '../ProductModal'

const products = [
	{id: 1, title: 'Название блюда', weight: '210г', ccal: '600', b: '7г', z: '25г', u: '39г', description: 'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.', price: 199},
	{id: 2, title: 'Название блюда', weight: '210г', ccal: '600', b: '7г', z: '25г', u: '39г', description: 'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.', price: 199},
	{id: 3, title: 'Название блюда', weight: '210г', ccal: '600', b: '7г', z: '25г', u: '39г', description: 'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.', price: 199},
	{id: 4, title: 'Название блюда', weight: '210г', ccal: '600', b: '7г', z: '25г', u: '39г', description: 'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.', price: 199},
	{id: 5, title: 'Название блюда', weight: '210г', ccal: '600', b: '7г', z: '25г', u: '39г', description: 'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.', price: 199},
]

const Recommendations: FC = () => {
	const [open, setOpen] = useState(null);

  const handleActive = (product: any) => {
    setOpen(product);
  };

  const onClose = () => {
    setOpen(null);
  };
	return (
    <View>
      <Title>Добавить в корзину</Title>

      <RecommendationsList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={(item: any, index: number) => index.toString()}
        renderItem={({ item, index }: { item: any; index: number }) => (
          <RecommendationCard product={item} onPress={handleActive} />
        )}
      />
      <ProductModal open={open} onClose={onClose} />
    </View>
  );
}

export default Recommendations