import {combineReducers} from 'redux';
import { routerStateReducer as router } from 'redux-router';

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



// import * as ActionTypes from '../actions'
// import merge from 'lodash/object/merge'
// import { routerStateReducer as router } from 'redux-router'
// import { combineReducers } from 'redux'

// // Updates an entity cache in response to any action with response.entities.
// function entities(state = { users: {}, repos: {} }, action) {
//   if (action.response && action.response.entities) {
//     return merge({}, state, action.response.entities)
//   }

//   return state
// }

// // Updates error message to notify about the failed fetches.
// function errorMessage(state = null, action) {
//   const { type, error } = action

//   if (type === ActionTypes.RESET_ERROR_MESSAGE) {
//     return null
//   } else if (error) {
//     return action.error
//   }

//   return state
// }



export default rootReducer
