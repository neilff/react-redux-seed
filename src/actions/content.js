import {
  LOAD_CONTENT_PENDING,
  LOAD_CONTENT_SUCCESS,
  LOAD_CONTENT_ERROR,
  REQUEST,
} from '../constants';

import { getContent } from '../api/content';

export function fetchContent() {
  return {
    [REQUEST]: {
      types: [ LOAD_CONTENT_PENDING, LOAD_CONTENT_SUCCESS, LOAD_CONTENT_ERROR ],
      payload: {
        request: getContent(),
      },
    },
  };
}
