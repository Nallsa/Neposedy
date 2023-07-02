import {FC} from 'react'
import { Container, ElText, MenuEl } from './styles'
import { AntDesign } from '@expo/vector-icons';

const UserExit: FC = () => {
	return (
		<Container>
			<MenuEl>
				<AntDesign name="logout" size={24} color="rgba(255, 77, 77, 1)" />
				<ElText>
					Выйти из аккаунта
				</ElText>
			</MenuEl>
		</Container>
	)
}

export default UserExit