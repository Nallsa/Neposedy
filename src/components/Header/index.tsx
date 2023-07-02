import { FC } from 'react'
//@ts-ignore
import Logo from '../../../assets/logo.svg'
import { Container, Text } from './style'
import SearchBtn from '../buttons/SearchBtn'
// import {Text} from 'react-native'

const Header: FC = () => {
	return (
		<Container>
			<Logo />
			{/* <Text>+7(900)000-00-00</Text> */}
			<SearchBtn />
		</Container>
	)
}

export default Header