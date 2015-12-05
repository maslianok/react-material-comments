import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import {commentActions} from '../config/actionTypes';

const {
  COMMENT_GET_PENDING,
  COMMENT_GET_FULFILLED,
  COMMENT_GET_REJECTED
} = commentActions;

function comments(state = {}, action) {
  switch (action.type) {
    case COMMENT_GET_PENDING:
      return {
        ...state
      };

    case COMMENT_GET_FULFILLED:
      let data = action.payload;
      return {
        ...state,
      };

    case COMMENT_GET_REJECTED:
      return state;

    default:
      return state;
  }
}


const rootReducer = combineReducers({
  comments,
  router
})

export default rootReducer
