import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FC, useCallback } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const App: FC = () => {
  moment.locale('ru');

  const [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('./assets/fonts/Gilroy-ExtraBold.otf'),
    'Gilroy-Light': require('./assets/fonts/Gilroy-Light.otf'),
    Gilroy: require('./assets/fonts/Gilroy-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
      <StatusBar style='auto' />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
