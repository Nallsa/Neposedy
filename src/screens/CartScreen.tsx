import { FC } from 'react';
import { View } from 'react-native';
import Layout from '../components/Layout';
import Cart from '../components/Cart';
interface IProps {
  navigation: any;
}
const CartScreen: FC<IProps> = ({ navigation }) => {
  return (
    <Layout>
      <Cart />
    </Layout>
  );
};

export default CartScreen;
