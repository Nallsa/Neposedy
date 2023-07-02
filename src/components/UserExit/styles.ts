import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../styles/theme/colors';


export const Container = styled.View`
	/* height: 100px; */
	/* width: ${Dimensions.get("window")?.width - 40}px; */
	flex-direction: column;
	margin-top: 20px;
`;

export const MenuEl = styled.TouchableOpacity`
	flex-direction: row;
	gap: 20px;
	align-items: center;
	padding: 16px;

`;


export const ElText = styled.Text`
	font-size: 16px;
	font-family: Gilroy;
	color: rgba(255, 77, 77, 1);
`;
