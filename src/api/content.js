import { get } from './fetchr';

export function getContent() {
  return (config) => get('/api/content', config);
}
