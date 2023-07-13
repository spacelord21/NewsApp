import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TRootStackParamList } from "../types";
import { AuthStack } from "../auth-stack";
import { MainStack } from "../main-stack";
import { useSelector } from "react-redux";
import { initialState as initialUserState } from "@entities/user";
import { RootState } from "@app/store/@types";
import { isEqual } from "@shared/utils";

const Stack = createNativeStackNavigator<TRootStackParamList>();
const defaultOptions = {
  headerShown: false,
};

export const RootStack = () => {
  const user = useSelector((state: RootState) => state.user);

  const initialRouteName = isEqual(user, initialUserState)
    ? "authStack"
    : "mainStack";
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
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
