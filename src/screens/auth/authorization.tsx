import {Input, PrimaryButton, styled} from '@shared/ui';
import {useAuth} from './hooks';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TRootStackParamList} from '@app/navigation/types';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Navigation = NativeStackNavigationProp<TRootStackParamList, 'authStack'>;

const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.palette.background.primary};
  justify-content: center;
  align-items: center;
`;

export const Authorization = () => {
  const {authHandler, password, setPassword, setUsername, username} = useAuth();
  const navigation = useNavigation<Navigation>();
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  return (
    <Container>
      <Input
        onChange={setUsername}
        value={username}
        placeholder="Логин"
        key="username"
      />
      <Input
        onChange={setPassword}
        value={password}
        placeholder="Пароль"
        key="password"
        type="password"
        isPassword={true}
      />
      <PrimaryButton onPress={authHandler} disabled={loading}>
        {loading ? (
          <ActivityIndicator
            size={'small'}
            color={theme.palette.accent['color-primary-600']}
          />
        ) : (
          'Авторизоваться'
        )}
      </PrimaryButton>
    </Container>
  );
};
