import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../../styles/theme/colors';


export const Container = styled.View`
	background-color: ${Colors.White};
	flex-direction: column;
	/* align-items: center; */
	justify-content: space-between;
	padding: 8px;
	overflow: hidden;
`

// export const Container = styled.TouchableOpacity`
// margin-bottom: 20px;
// `

export const Background = styled.ImageBackground`
	width: ${Dimensions.get("window")?.width - 40}px;
	height: 210px;
	overflow: hidden;
	margin-top: 15px;
	margin-bottom: 16px;
`

export const Description = styled.Text`
	font-size: 18px;
	font-family: Gilroy;
	color: ${Colors.Gray};
	line-height: 24px;
	margin-top: 8px;
`

export const BtnText = styled.Text`
	font-size: 18px;
	font-family: Gilroy;
	color: ${Colors.Text};
	line-height: 24px;
	margin-top: 8px;
`