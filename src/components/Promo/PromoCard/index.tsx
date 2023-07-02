import {FC} from 'react'
import { Background, Container, Description } from './styles'
import { Title } from '../../styles'

interface IProps {
	promo: any
	setOpen?: (promo: any)=> void
}

const PromoCard: FC<IProps> = ({ promo, setOpen }) => {
	const handlePress = () => {
		setOpen && setOpen(promo)
	}
	return (
		<Container onPress={handlePress}>
			<Background
				source={require('../../../../assets/demo/demo_promo2.png')}
				imageStyle={{ borderRadius: 10 }}
			>
			</Background>

			<Title>{promo?.title}</Title>
			<Description>
			{promo?.description?.slice(0, 90)}
			</Description>
		</Container>
	)
}

export default PromoCard