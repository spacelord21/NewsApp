import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStack} from './navigation/root-stack';
import {AppThemeProvider} from '@shared/ui';
import {Provider} from 'react-redux';
import {store} from './store';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <AppThemeProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </AppThemeProvider>
      </Provider>
    </SafeAreaView>
  );
};
