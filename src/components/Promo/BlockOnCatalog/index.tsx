import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Row, Title } from '../../styles';
import { Container, PromoList } from './styles';
import PromoCardOnCatalog from './PromoCardOnCatalog';
import Button from '../../buttons/Button';
import { Entypo } from '@expo/vector-icons';
import { Link, useNavigation } from '@react-navigation/native';

interface IProps {}

const PromoBlockOnCatalog: FC<IProps> = () => {
  const promo = [1, 2, 3, 4, 5, 6];

  const navigation = useNavigation();
  

  return (
    <Container>
      <Row>
        <Title>Акции в нашем кафе</Title>
        <Button
          navigationPath={'Promo'}
          navigation={navigation}
          style={{ width: 85 }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: 5,
              paddingLeft: 5,
            }}
          >
            <Text>Все</Text>
            <Entypo name='chevron-small-right' size={24} color='black' />
          </View>
        </Button>
      </Row>
      <PromoList
        horizontal={true}
        data={promo}
        keyExtractor={(item: any, index: number) => index.toString()}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item, index }: { item: any; index: number }) => (
          <PromoCardOnCatalog promo={item} />
        )}
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
    </Container>
  );
};

export default PromoBlockOnCatalog;
