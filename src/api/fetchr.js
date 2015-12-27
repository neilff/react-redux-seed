import { fromJS } from 'immutable';

const defaultOptions = fromJS({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function fetchr(endpoint, _options = defaultOptions) {
  const options = _options.toJS();

  return fetch(`${ endpoint }`, options)
          .then(checkStatus)
          .then(res => res.json());
}

export function get(endpoint, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'GET');

  return fetchr(endpoint, options);
}

export function post(endpoint, body = {}, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'POST')
                                .set('body', JSON.stringify(body));

  return fetchr(endpoint, options);
}

export function put(endpoint, body = {}, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'PUT')
                                .set('body', JSON.stringify(body));

  return fetchr(endpoint, options);
}

export function destroy(endpoint, config = {}) {
  const options = defaultOptions.mergeDeep(fromJS(config))
                                .set('method', 'DELETE');

  return fetchr(endpoint, options);
}
