import { TRootStackParamList } from "@app/navigation/types";
import { useAppDispatch } from "@app/store";
import { fetchNews } from "@entities/news/api";
import { authorization } from "@entities/user/api";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Navigation = NativeStackNavigationProp<TRootStackParamList, "authStack">;

export const useAuth = () => {
  const [email, setEmail] = useState("bullet2271293@gmail.com");
  const [password, setPassword] = useState("beta1234");
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<Navigation>();

  const authHandler = async () => {
    dispatch(authorization({ email: email, password: password }));
  };

  useEffect(() => {
    if (user.avatar_url && user.username) {
      navigation.navigate("mainStack");
      setEmail("");
      setPassword("");
      dispatch(fetchNews());
    }
  }, [user]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    authHandler,
    loading: user.loading,
    errorMessage: user.errorMessage,
  };
};
