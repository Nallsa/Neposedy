import { FC } from 'react';
import Layout from '../components/Layout';
import UserInfo from '../components/UserInfo';
import UserWallets from '../components/UserWallets';
import UserAdresses from '../components/UserAdresses';
import UserMenu from '../components/UserMenu';
import UserExit from '../components/UserExit';
import { View } from 'react-native';
import { Dimensions } from 'react-native';

const UserScreen: FC = () => {
  return (
    <Layout>
      <View
        style={{
          justifyContent: 'space-between',
          height: Dimensions?.get('window')?.height - 140,
        }}
      >
        <UserInfo />
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <UserWallets />
          <UserAdresses />
        </View>

        <UserMenu />

        <UserExit />
      </View>
    </Layout>
  );
};

export default UserScreen;
