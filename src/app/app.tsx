import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStack} from './navigation/root-stack';
import {AppThemeProvider} from '@shared/ui';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppThemeProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </AppThemeProvider>
    </SafeAreaView>
  );
};
