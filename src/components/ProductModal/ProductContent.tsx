import {FC, useState} from 'react'
import { ButtonsContainer, Container, ProductBZU, ProductDescription, ProductImage, ProductPrice, ProductQtyContainer, ProductSubTitle, ProductTitle, QTY } from './styles'
import {View} from 'react-native'
import { Column, Row } from '../styles'
import { Entypo } from '@expo/vector-icons';
import { Colors } from '../../styles/theme/colors';
import { ScrollView } from 'react-native';
import Button from '../buttons/Button';

interface IProps {
	product: any
}

const ProductContent: FC<IProps> = ({ product }) => {
	const [count, setCount] = useState<number>(0)

	const handleCounter = (type: 'increment' | 'decrement') => {
		setCount(prev => type === 'increment' ? ++prev : prev <= 0 ? 0 : --prev)
	}
	return (
		<ScrollView>
			<Container>
				<ProductImage
					source={require('../../../assets/demo/demo_product_big.png')}
					imageStyle={{ borderRadius: 10 }}
				/>
				<View>
					<ProductTitle>
						{product?.title}
					</ProductTitle>

					<ProductDescription>
						{product?.description}
					</ProductDescription>

					<Row style={{marginTop: 16, justifyContent: 'flex-start', gap: 20}}>
						<Column>
							<ProductSubTitle>
								Вес
							</ProductSubTitle>
							<ProductBZU>
								{product?.weight}
							</ProductBZU>
						</Column>

						<Column>
							<ProductSubTitle>
								Ккал
							</ProductSubTitle>
							<ProductBZU>
								{product?.ccal}
							</ProductBZU>
						</Column>

						<Column>
							<ProductSubTitle>
								Б / Ж / У
							</ProductSubTitle>
							<ProductBZU>
								{`${product?.b}/${product?.z}/${product?.u}`}
							</ProductBZU>
						</Column>
					</Row>

				</View>

				<ButtonsContainer>
					<ProductQtyContainer>
						<Entypo name="minus" size={24} color="black" onPress={()=> handleCounter('decrement')} />
						<QTY>
							{count}
						</QTY>
						<Entypo name="plus" size={24} color={Colors.Accent} onPress={()=> handleCounter('increment')} />
					</ProductQtyContainer>

					<Button /* style={{height: '60px'}} */>
						<ProductPrice>
							Добавить в корзину {product?.price}₽
						</ProductPrice>
					</Button>
				</ButtonsContainer>
			</Container>
		</ScrollView>
	)
}

export default ProductContent