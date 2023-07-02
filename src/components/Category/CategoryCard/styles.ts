import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../../styles/theme/colors';

interface IProps {
	active?: boolean
}

export const Container = styled.TouchableOpacity<IProps>`
	background-color: ${({active}:IProps)=> active ? Colors.Accent : Colors.White};
	width: 75px;
	height: 99px;
	border-radius: 16px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 8px;
	overflow: hidden;
	margin: 10px 0;
`

export const Image = styled.Image`
	width: 60px;
	height: 60px;
`

export const CategoryTitle = styled.Text`
	font-size: 12px;
	font-family: Gilroy;
	color: ${Colors.Text};
`
