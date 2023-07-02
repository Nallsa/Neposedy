import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  Promo: undefined;
  Cart: undefined;
  Orders: undefined;
  More: undefined;
  EditUser: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type CartStackParamList = {
  Home: undefined;
};

export type IntroStackParamList = {
  Login: undefined;
  Registration: undefined;
  OTP: undefined;
  Home: undefined;
};

export type RootStackParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;

  SearchProducts: undefined;
  EditUser: undefined;
  AddWallets: undefined;
  AddAdresses: undefined;
  IntroScreen: IntroStackParamList;
  Home: undefined;
  setting: any;
};
