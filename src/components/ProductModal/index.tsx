import { FC, ReactNode, useEffect, useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Dimensions } from 'react-native';
import ProductContent from './ProductContent';

interface IProps {
  open?: any;
  onClose?(): void;
}

const ProductModal: FC<IProps> = ({ open, onClose }) => {
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
      height={Dimensions.get('screen').height - 80}
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
      <ProductContent product={open} />
    </RBSheet>
  );
};

export default ProductModal;
