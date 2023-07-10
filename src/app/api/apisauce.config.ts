import {create} from 'apisauce';

export const api = create({
  baseURL: 'https://lzone.secret-agents.ru/api/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});
