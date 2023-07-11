import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStack } from "./navigation/root-stack";
import { AppThemeProvider } from "@shared/ui";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppThemeProvider>
        <Provider store={store}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </Provider>
      </AppThemeProvider>
    </SafeAreaView>
  );
};
