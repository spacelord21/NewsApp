import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TMainStackParamList} from '../types';
import {News} from '@screens/news';

const Stack = createNativeStackNavigator<TMainStackParamList>();
const defaultOptions = {
  headerShown: false,
};

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="news">
      <Stack.Screen
        name="news"
        component={News}
        options={{...defaultOptions}}
      />
    </Stack.Navigator>
  );
};
