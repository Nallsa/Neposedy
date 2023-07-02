import {FC} from 'react'
import { Container, ElText, MenuEl } from './styles'
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Divider } from '../styles';
import { Ionicons } from '@expo/vector-icons';

const UserMenu: FC = () => {
	return (
		<Container>
			<MenuEl>
				<AntDesign name="staro" size={24} color="black" />
				<ElText>
					Избранное
				</ElText>
			</MenuEl>
			<Divider />

			<MenuEl>
			<Ionicons name="build-outline" size={24} color="black" />
				<ElText>
					Настройки
				</ElText>
			</MenuEl>
			<Divider />

			<MenuEl>
			<MaterialIcons name="delivery-dining" size={24} color="black" />
				<ElText>
					Условия доставки
				</ElText>
			</MenuEl>
			<Divider />

			<MenuEl>
			<AntDesign name="infocirlceo" size={24} color="black" />
				<ElText>
					О ресторане
				</ElText>
			</MenuEl>
			<Divider />

			<MenuEl>
			<SimpleLineIcons name="emotsmile" size={24} color="black" />
				<ElText>
					Связаться с нами
				</ElText>
			</MenuEl>
			<Divider />

			<MenuEl>
			<AntDesign name="infocirlceo" size={24} color="black" />
				<ElText>
					О приложении
				</ElText>
			</MenuEl>
			{/* <View style={{ backgroundColor: 'gray', height: 0.5, width: '100%' }} /> */}

		</Container>
	)
}

export default UserMenu