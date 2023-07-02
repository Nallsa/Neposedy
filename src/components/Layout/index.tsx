import { FC, ReactNode } from 'react';
import { Wrapper } from './style';
import useScreenSize from '../../hooks/useScreenSize';
import Header from '../Header';
import { RefreshControl, ScrollView } from 'react-native';

interface IProps {
  children: ReactNode;
  noPadding?: boolean;
}

const Layout: FC<IProps> = ({ children, noPadding = false }) => {
  const { width } = useScreenSize();
  return (
    <>
      <Header />
      <ScrollView
        refreshControl={
          <RefreshControl style={{ marginRight: 100 }} refreshing={false} />
        }

        // stickyHeaderIndices={[1]}
      >
        <Wrapper width={width} noPadding={noPadding}>
          {/* <StatusBar /> */}
          {children}
        </Wrapper>
      </ScrollView>
    </>
  );
};

export default Layout;
