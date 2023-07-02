import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


export const Container = styled.SafeAreaView`
margin-bottom: 20px;
`
export const PromoList = styled.FlatList`
	flex-direction: row;
	/* margin-bottom: 20px; */
`;

export const Background = styled.ImageBackground`
	width: ${Dimensions.get("window")?.width - 40}px;
	height: 150px;
	overflow: hidden;
	margin-top: 15px;
`