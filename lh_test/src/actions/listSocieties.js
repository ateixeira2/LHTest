export const LIST_SOCIETIES_FETCH_SUCCEEDED = 'LIST_SOCIETIES_FETCH_SUCCEEDED';
export const LIST_SOCIETIES_FETCH_FAILED = 'LIST_SOCIETIES_FETCH_FAILED';
export const LIST_SOCIETIES_FETCH_REQUESTED = 'LIST_SOCIETIES_FETCH_REQUESTED';

export function fetchListSocietiesSucceeded(payload) {
  return ({
    type: LIST_SOCIETIES_FETCH_SUCCEEDED,
    payload
  });
}

export function fetchListSocietiesFailed(payload) {
  return ({
    type: LIST_SOCIETIES_FETCH_FAILED,
    payload
  });
}

export function fetchListSocietiesRequested() {
  return ({ type: LIST_SOCIETIES_FETCH_REQUESTED });
}
