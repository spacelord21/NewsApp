import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStack } from "./navigation/root-stack";
import { AppThemeProvider } from "@shared/ui";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={{ top: "maximum" }}>
        <AppThemeProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <NavigationContainer>
                <RootStack />
              </NavigationContainer>
            </PersistGate>
          </Provider>
        </AppThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
