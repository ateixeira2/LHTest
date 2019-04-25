import {
  LIST_SOCIETIES_FETCH_SUCCEEDED,
  LIST_SOCIETIES_FETCH_FAILED,
  LIST_SOCIETIES_FETCH_REQUESTED
} from '../actions/listSocieties';

const initialState = {
  fetching: false,
  fetched: false,
  error: null,
  payload: []
};

function listSocieties(state = initialState, action) {
  switch (action.type) {
  case LIST_SOCIETIES_FETCH_SUCCEEDED:
    return {
      ...state,
      fetching: false,
      fetched: true,
      payload: action.payload
    };
  case LIST_SOCIETIES_FETCH_FAILED:
    return {
      ...state,
      fetching: true,
      fetched: false,
      error: action.message
    };
  case LIST_SOCIETIES_FETCH_REQUESTED:
    return {
      ...state,
      fetching: true,
      fetched: false
    };
  default:
    return state;
  }
}

export default listSocieties;
