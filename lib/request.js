import comments from './../data';

export default function(config) {

  return new Promise(function(resolve, reject){
    resolve(comments);
  });
  
  // return fetch(config.url, {
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'X-Requested-With': 'XMLHttpRequest',
  //   }
  // }).then(function(response) {
  //     if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //     }
  //     return response.json();
    
  // }).then(function(stories) {

  // });
}
