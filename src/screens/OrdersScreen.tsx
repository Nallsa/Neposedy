import {FC} from 'react'
import { View } from 'react-native'
import Layout from '../components/Layout'
import { NotFoundText, OrdersWrapper, Title } from '../components/styles'
import {Image} from 'react-native';

const OrdersScreen: FC = () => {
	return (
		<Layout>
			<Title>
				История заказов
			</Title>
			<OrdersWrapper>
				<Image
					// style={styles.tinyLogo}
					source={require('../../assets/not-found.png')}
				/>
				<NotFoundText>
					Здесь пусто...
				</NotFoundText>
			</OrdersWrapper>
		</Layout>
	)
}

export default OrdersScreen