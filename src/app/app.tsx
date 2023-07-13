import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { RootStack } from "./navigation/root-stack";
import { AppThemeProvider } from "@shared/ui";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={{ top: "maximum" }}>
        <AppThemeProvider>
          <Provider store={store}>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </Provider>
        </AppThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
