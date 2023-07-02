import {FC} from 'react'
import { CategoryTitle, Container, Image } from './styles'
import {
  StyleSheet
} from "react-native";

interface IProps {
	active?: boolean
	category?: any
	onPress?: (id: number) => void
}

const CategoryCard: FC<IProps> = ({ active, category, onPress }) => {

	const handlePress = (): void => {
		onPress && onPress(category?.id)
	}

	return (
		<Container active={active} style={styles.containerStyle} onPress={handlePress}>
			<Image
				source={require('../../../../assets/demo/demo_category.png')}
			/>
			<CategoryTitle numberOfLines={1}>
				{category.title}
			</CategoryTitle>
		</Container>
	)
}

export default CategoryCard

const styles = StyleSheet.create({
  containerStyle: {
    shadowColor: '#2e2d2d4e',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 7,
  }
})