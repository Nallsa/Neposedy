import { Dimensions } from 'react-native';

const useScreenSize = (): {width?: number, height?: number} => {
	return {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
}
}

export default useScreenSize