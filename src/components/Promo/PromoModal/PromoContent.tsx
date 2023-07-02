import {FC} from 'react'
import { Background, BtnText, Container, Description } from './styles'

import { ScrollView } from 'react-native';

import { Title } from '../../styles';
import Button from '../../buttons/Button';

interface IProps {
	promo: any
}

const PromoContent: FC<IProps> = ({ promo }) => {

	return (
		<ScrollView>
			<Container>
				<Background
					source={require('../../../../assets/demo/demo_promo2.png')}
					imageStyle={{ borderRadius: 10 }}
				>
				</Background>

				<Title>{promo?.title}</Title>
				<Description>
					{promo?.description}
				</Description>
				<Button big style={{marginTop: 30}}>
					<BtnText>
						К покупкам!
					</BtnText>
				</Button>
			</Container>

		</ScrollView>
	)
}

export default PromoContent