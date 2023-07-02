import styled from 'styled-components/native';
import { Colors } from '../../../styles/theme/colors';

interface IProps {
	height?: number
}

export const Container = styled.TouchableOpacity`
	height: 44px;
	width: 100%;
	border-radius: 16px;
	background-color: ${Colors?.Accent};
	/* flex-direction: row; */
	justify-content: center;
	align-items: center;
	/* padding: 8px 8px 8px 16px; */
	color: ${Colors.Text};
	min-width: 70px;
	font-family: Gilroy;
`