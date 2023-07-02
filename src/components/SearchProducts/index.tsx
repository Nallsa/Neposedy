import React, { FC, SetStateAction, useState } from 'react';
import {
  Container,
  InputSearch,
  ProductsNameList,
  ProductsNameView,
  SearchResult,
  TextElement,
  ViewChild,
  WrapperElement,
} from './styles';
import { ScrollView } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProductsList from '../ProductsList';
import GoBackButton from '../buttons/GoBackButton';

const productsName = [
  {
    id: 11,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
  {
    id: 12,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
  {
    id: 13,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
  {
    id: 13,
    title: 'Название блюда',
    weight: '210г',
    ccal: '600',
    b: '7г',
    z: '25г',
    u: '39г',
    description:
      'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации ассоциативно распределены по отраслям.',
    price: 199,
  },
];

const SearchProducts: FC = () => {
  const [inputValue, setInputValue] = useState<SetStateAction<string>>();

  return (
    <Container>
      <WrapperElement>
        <View>
          <GoBackButton style={styles.GoBackStyle} />
        </View>
        <View style={styles.sectionStyle}>
          <MaterialIcons
            name='search'
            size={24}
            color='black'
            style={{
              // padding: 10,
              margin: 5,
              height: 25,
              width: 25,
              paddingLeft: 5,
            }}
          />
          <InputSearch
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            style={{ flex: 1 }}
            placeholder='Что будем искать?'
            underlineColorAndroid='transparent'
            onChangeText={(text: React.SetStateAction<string>) =>
              setInputValue(text)
            }
            value={inputValue}
          />
        </View>
      </WrapperElement>
      <TextElement>Может быть ищете...</TextElement>
      <View style={{ marginBottom: 5 }}>
        <ProductsNameList
          horizontal={true}
          data={productsName}
          keyExtractor={(index: number) => index.toString()}
          renderItem={({ item, index }: { item: any; index: number }) => (
            <ProductsNameView>
              <ViewChild numberOfLines={1}>{item.title}</ViewChild>
            </ProductsNameView>
          )}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => {
            return (
              <View
                style={{
                  height: '100%',
                  width: 10,
                }}
              />
            );
          }}
        />
      </View>
      <SearchResult>Результаты поиска</SearchResult>
      <ScrollView>
        <View style={{ marginBottom: 100 }}>
          <ProductsList />
        </View>
      </ScrollView>
    </Container>
  );
};

export default SearchProducts;

const styles = StyleSheet.create({
  GoBackStyle: {
    shadowColor: '#2e2d2d63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 7,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    width: 283,
    height: 44,
    borderColor: `rgba(4, 6, 19, 0.1)`,
    backgroundColor: '#fff',
    marginLeft: 16,
  },
});
