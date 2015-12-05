import request from '../lib/request';

export function requestCommentsData(id) {
  return {
    type: 'COMMENTS_GET',
    payload: {
      promise: request({
        url: 'http://innovations.ro/req/'
      })
    },
    meta: {id}
  };
}