import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Colors } from '../../styles/theme/colors';


export const Container = styled.View`
	background-color: ${Colors.White};
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	overflow: hidden;
`

export const ProductImage = styled.ImageBackground`
	width: ${Dimensions.get("window")?.width - 32}px;
	height: ${Dimensions.get("window")?.width - 32}px;
	overflow: hidden;
`

export const ProductTitle = styled.Text`
	font-family: Gilroy;
	font-size: 26px;
	color: ${Colors.Text};
`
export const ProductSubTitle = styled.Text`
	font-family: Gilroy;
	font-size: 16px;
	color: ${Colors.Gray};
`

export const ProductDescription = styled.Text`
	font-family: Gilroy;
	font-size: 18px;
	color: ${Colors.Gray};
	margin-top: 16px;
	line-height: 25px;
`

export const ProductBZU = styled.Text`
	font-family: Gilroy;
	font-size: 20px;
	color: ${Colors.Text};
`

export const ProductPrice = styled.Text`
	font-family: Gilroy;
	font-size: 18px;
	color: ${Colors.Text};
`

export const ProductQtyContainer = styled.View`
	border-radius: 16px;
	width: 94px;
	height: 50px;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	border: 0.5px solid rgba(4, 6, 19, 0.1);
	padding: 0 5px;
`

export const QTY = styled.Text`
	font-family: Gilroy;
	font-size: 18px;
	color: ${Colors.Text};
`

export const ButtonsContainer = styled.View`
	flex-direction: row;
	margin-top: 30px;
	margin-bottom: 30px;
	justify-content: space-between;
	align-items: center;
	background-color: #0000;
	gap: 20px;
`
