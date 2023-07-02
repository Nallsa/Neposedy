import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import BottomTabNavigator from './BottomTabNavigator';
import IntroScreen from '../screens/IntroScreen';
import SearchProducts from '../screens/SearchProducts';
import EditUser from '../components/UserInfo/EditUser';
import AddWallets from '../components/UserWallets/AddWallets';
import AddAdresses from '../components/UserAdresses/AddAdresses';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const isAuth = true;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isAuth ? 'BottomTabNavigator' : 'IntroScreen'}
    >
      {isAuth ? (
        <>
          <Stack.Group>
            <Stack.Screen name='AddWallets' component={AddWallets} />
            <Stack.Screen name='AddAdresses' component={AddAdresses} />
          </Stack.Group>

          <Stack.Screen name='SearchProducts' component={SearchProducts} />

          <Stack.Screen name='EditUser' component={EditUser} />

          <Stack.Screen
            name='BottomTabNavigator'
            component={BottomTabNavigator}
          />
        </>
      ) : (
        <Stack.Screen name='IntroScreen' component={IntroScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
