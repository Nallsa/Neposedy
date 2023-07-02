import {FC} from 'react'
import { Background } from './styles'
import { Text } from 'react-native'

interface IProps {
  promo: any;
};

const PromoCardOnCatalog: FC<IProps> = ({promo}) => {
	return (
		<Background
			source={require('../../../../assets/demo/demo_promo1.png')}
			imageStyle={{ borderRadius: 10 }}
		>
			{/* <Text>{promo}</Text> */}
		</Background>
	)
}

export default PromoCardOnCatalog