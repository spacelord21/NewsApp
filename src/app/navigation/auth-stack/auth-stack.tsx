import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TAuthStackParamList } from "../types";
import { Authorization } from "@screens/auth";

const Stack = createNativeStackNavigator<TAuthStackParamList>();
const defaultOptions = {
  headerShown: false,
};

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="auth">
      <Stack.Screen
        name="auth"
        component={Authorization}
        options={{ ...defaultOptions }}
      />
    </Stack.Navigator>
  );
};
