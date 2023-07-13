import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TRootStackParamList } from "../types";
import { AuthStack } from "../auth-stack";
import { MainStack } from "../main-stack";

const Stack = createNativeStackNavigator<TRootStackParamList>();
const defaultOptions = {
  headerShown: false,
};

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="authStack">
      <Stack.Screen
        name="authStack"
        component={AuthStack}
        options={{ ...defaultOptions }}
      />
      <Stack.Screen
        name="mainStack"
        component={MainStack}
        options={{ ...defaultOptions }}
      />
    </Stack.Navigator>
  );
};
