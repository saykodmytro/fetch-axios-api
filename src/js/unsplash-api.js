//   ********************************  FETCH
// export class UnsplashAPI {
//   #BASE_URL = 'https://api.unsplash.com';
//   #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
//   #END_POINT = '/search/photos';

//   constructor(perPage) {
//     this.page = 1;
//     this.query = null;
//     this.perPage = perPage;
//   }

//   fetchPhotos() {
//     const searchParams = new URLSearchParams({
//       page: this.page,
//       query: this.query,
//       per_page: this.perPage,
//       client_id: this.#API_KEY,
//       orientation: 'landscape',
//     });

//     return fetch(`${this.#BASE_URL}${this.#END_POINT}?${searchParams}`).then(
//       resp => {
//         if (!resp.ok) {
//           throw new Error(resp.statusText);
//         }
//         return resp.json();
//       }
//     );
//   }
// }

// *****************************   AXIOS

import axios from 'axios';

export class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com';
  #END_POINT = '/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor(perPage) {
    this.page = 1;
    this.query = 'cat';
    this.perPage = perPage;
  }

  fetchPhotos() {
    return axios
      .get(`${this.#BASE_URL}${this.#END_POINT}`, {
        params: {
          page: this.page,
          query: this.query,
          per_page: this.perPage,
          client_id: this.#API_KEY,
          orientation: 'landscape',
        },
      })
      .then(resp => resp.data);
  }
}
