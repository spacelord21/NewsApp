import { TRootStackParamList } from "@app/navigation/types";
import { useAppDispatch } from "@app/store";
import { authorization } from "@entities/user/api";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { useUser } from "@entities/user";

type Navigation = NativeStackNavigationProp<TRootStackParamList, "authStack">;

export const useAuth = () => {
  const [email, setEmail] = useState("bullet2271293@gmail.com");
  const [password, setPassword] = useState("beta1234");
  const dispatch = useAppDispatch();
  const user = useUser();
  const navigation = useNavigation<Navigation>();

  const authHandler = () => {
    dispatch(authorization({ email: email, password: password }));
  };

  useEffect(() => {
    if (user.avatar_url && user.username) {
      navigation.navigate("mainStack");
      setEmail("");
      setPassword("");
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
