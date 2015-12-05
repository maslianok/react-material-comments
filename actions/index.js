import request from '../lib/request';

export function requestCommentsData(id) {
  return {
    type: 'COMMENT_GET',
    payload: {
      promise: request({
        url: 'http://innovations.ro/req/'
      })
    },
    meta: {id}
  };
}

export function deleteComment(id, value) {
  return {
    type: 'COMMENT_CHANGE',
    id,
    prop: 'is_deleted',
    value
  };
}

export function hideComment(id, value) {
  return {
    type: 'COMMENT_CHANGE',
    id,
    prop: 'is_hidden',
    value
  };
}