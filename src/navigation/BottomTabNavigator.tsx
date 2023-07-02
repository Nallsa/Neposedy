import { FC } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabParamList, RootStackParamList } from '../types/navigation';
import { MenuLabel } from './BottomTabStyle';
import { Colors } from '../styles/theme/colors';
import CatalogScreen from '../screens/CatalogScreen';
import {
  Burger,
  BurgerActive,
  Cart,
  CartActive,
  More,
  Orders,
  Promo,
  PromoActive,
} from '../icons';
import PromoScreen from '../screens/PromoScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartScreen from '../screens/CartScreen';
import UserScreen from '../screens/UserScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditUser from '../components/UserInfo/EditUser';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomTabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const catalogStackOptions: BottomTabNavigationOptions = {
  tabBarLabel: props => {
    return props.focused ? <MenuLabel>Каталог</MenuLabel> : null;
  },
  tabBarIcon: ({ focused }) => <>{focused ? <BurgerActive /> : <Burger />}</>,
};

const PromoScreenOptions: BottomTabNavigationOptions = {
  tabBarLabel: props => {
    return props.focused ? <MenuLabel>Акции</MenuLabel> : null;
  },
  tabBarIcon: ({ focused }) => <>{focused ? <PromoActive /> : <Promo />}</>,
};

const ordersOptions: BottomTabNavigationOptions = {
  tabBarLabel: props => {
    return props.focused ? <MenuLabel>Заказы</MenuLabel> : null;
  },
  tabBarIcon: ({ focused }) => <Orders />,
};

const cartOptions: BottomTabNavigationOptions = {
  tabBarLabel: props => {
    return props.focused ? <MenuLabel>Корзина</MenuLabel> : null;
  },
  tabBarIcon: ({ focused }) => <>{focused ? <CartActive /> : <Cart />}</>,
};

const moreOptions: BottomTabNavigationOptions = {
  tabBarLabel: props => {
    return props.focused ? <MenuLabel>Ещё</MenuLabel> : null;
  },
  tabBarIcon: ({ focused }) => <More />,
};

const BottomTabNavigator: FC = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name='HomeStack'
          component={CatalogScreen}
          options={catalogStackOptions}
        />
        <Tab.Screen
          name='Promo'
          component={PromoScreen}
          options={PromoScreenOptions}
        />
        <Tab.Screen
          name='Orders'
          component={OrdersScreen}
          options={ordersOptions}
        />
        <Tab.Screen name='Cart' component={CartScreen} options={cartOptions} />
        <Tab.Screen name='More' component={UserScreen} options={moreOptions} />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
