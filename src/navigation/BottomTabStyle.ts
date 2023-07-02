import styled from 'styled-components/native';
import {Colors} from '../styles/theme/colors'

interface IProps {
	height?: number
}

export const MenuLabel = styled.Text`
	font-size: 10px;
	line-height: 14px;
	color: ${Colors.Text};
	font-family: Gilroy;
	font-weight: 400;
	margin-top: -10px;
`
