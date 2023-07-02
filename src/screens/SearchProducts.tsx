import { FC } from 'react';
import Layout from '../components/Layout';
import SearchProducts from '../components/SearchProducts';

import { View } from 'react-native';
import { Dimensions } from 'react-native';

const UserScreen: FC = () => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: Dimensions?.get('window')?.height - 140,
      }}
    >
      <SearchProducts />
    </View>
  );
};

export default UserScreen;
