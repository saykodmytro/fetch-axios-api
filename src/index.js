import { UnsplashAPI } from './js/unsplash-api';

const unsplashApi = new UnsplashAPI(40);
unsplashApi
  .fetchPhotos()
  .then(console.log)
  .catch(error => {
    alert('Ups');
  });
