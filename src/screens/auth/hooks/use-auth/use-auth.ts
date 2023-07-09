import {useState} from 'react';
const DEFAULT_TIMEOUT = 3000;

export const useAuth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authHandler = async () => {};

  return {username, setUsername, password, setPassword, authHandler};
};
