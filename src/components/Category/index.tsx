import {FC, useState} from 'react'
import { CategoryList, Container } from './styles'
import { Title } from '../styles'
import CategoryCard from './CategoryCard'
import { View } from 'react-native'



const CategoryWrapper: FC = () => {
	const [activeState, setActiveState] = useState<number>(0)

	const handleActive = (id: number): void => {
		setActiveState(prev => id === prev ? 0 : id)
	}

	const category = [
		{ id: 1, title: 'Первое'},
		{ id: 2, title: 'Второе'},
		{ id: 3, title: 'Горячее'},
		{ id: 4, title: 'Пицца'},
		{ id: 5, title: 'Суши'},
		{ id: 6, title: 'Бургеры'},
	]


	return (
		<Container>
			<Title>Чем порадуете себя?</Title>
			<CategoryList
				horizontal={true}
				data={category}
				keyExtractor={(item: any, index: number) => index.toString()}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item, index }: { item: any, index: number }) =>
				<CategoryCard
						category={item}
						active={activeState === item?.id}
						onPress={handleActive}
				/>
				}
				ItemSeparatorComponent={() => {
					return (
						<View
							style={{
							height: "100%",
							width: 10,
							}}
						/>
					);
				}}
			/>
		</Container>
	)
}

export default CategoryWrapper