import { post } from './fetchr';

export function login(username, password) {
  return (config) => post('/login', { username, password }, config);
}
