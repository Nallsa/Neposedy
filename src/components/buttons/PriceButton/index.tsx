import {FC, ReactNode} from 'react'
import { Container } from './style'

interface IProps {
	children?: ReactNode
	style?: Object
}

const PriceButton: FC<IProps> = ({children, style}) => {
	return (
		<Container style={style}>
			{children}
		</Container>
	)
}

export default PriceButton