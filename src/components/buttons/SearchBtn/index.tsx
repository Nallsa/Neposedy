import { FC } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from './style';
import { StyleSheet } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const SearchBtn: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Container
      style={styles.containerStyle}
      onPress={() => navigation.navigate('SearchProducts')}
    >
      <MaterialIcons name='search' size={24} color='black' />
    </Container>
  );
};

export default SearchBtn;

const styles = StyleSheet.create({
  containerStyle: {
    shadowColor: '#2e2d2d63',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 7,
  },
});
