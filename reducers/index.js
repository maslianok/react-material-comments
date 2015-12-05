import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';

import {commentActions} from '../config/actionTypes';

const {
  COMMENT_GET_PENDING,
  COMMENT_GET_FULFILLED,
  COMMENT_GET_REJECTED,
  COMMENT_CHANGE
} = commentActions;

function comments(state = {items: []}, action) {
  switch (action.type) {
    case COMMENT_GET_PENDING:
      return state;

    case COMMENT_GET_FULFILLED:
      return {
        items: action.payload.items
      };

    case COMMENT_GET_REJECTED:
      return state;

    case COMMENT_CHANGE:
      const items = state.items.reduce((result, comment) => {
        if (comment.id == action.id) {
          result.push({
            ...comment,
            [action.prop]: action.value
          });
        } else {
          result.push({...comment});
        }
        return result;
      }, [])
      return {items};
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  comments,
  router
})

export default rootReducer
