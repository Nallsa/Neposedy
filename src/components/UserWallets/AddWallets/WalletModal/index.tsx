import { FC, ReactNode, useEffect, useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Dimensions, Text } from 'react-native';
import ProductContent from './WalletContent';
import WalletContent from './WalletContent';

interface IProps {
  open?: any;
  onClose?(): void;
}

const WalletModal: FC<IProps> = ({ open, onClose }) => {
  const refRBSheet = useRef<RBSheet | undefined>();

  useEffect(() => {
    if (open) {
      refRBSheet.current?.open();
    } else {
      refRBSheet.current?.close();
    }
  }, [open]);

  return (
    <RBSheet
      // @ts-ignore
      ref={refRBSheet}
      closeOnDragDown={true}
      dragFromTopOnly={true}
      onClose={onClose}
      height={Dimensions.get('screen').height - 400}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,.6)',
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 20,
        },
        draggableIcon: {
          backgroundColor: '#000',
          width: 134,
          height: 10,
        },
      }}
    >
      <WalletContent wallet={open} />
    </RBSheet>
  );
};

export default WalletModal;
