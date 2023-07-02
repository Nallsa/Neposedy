import { FC } from 'react';
import { ScrollView } from 'react-native';
import Layout from '../components/Layout';
import PromoBlockOnCatalog from '../components/Promo/BlockOnCatalog';
import CategoryWrapper from '../components/Category';
import ProductsList from '../components/ProductsList';

interface IProps {}

const CatalogScreen: FC<IProps> = () => {
  return (
    <Layout>
      <PromoBlockOnCatalog />
      <CategoryWrapper />
      <ProductsList />
    </Layout>
  );
};

export default CatalogScreen;
