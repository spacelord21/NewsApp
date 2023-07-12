import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TMainStackParamList } from "../types";
import { News } from "@screens/news";
import { NewsItem } from "@screens/news-item";

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
        options={{ ...defaultOptions }}
      />
      <Stack.Screen
        name="newsItem"
        component={NewsItem}
        options={{ ...defaultOptions }}
      />
    </Stack.Navigator>
  );
};
