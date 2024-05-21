type Movie = 'popular' | 'top-rated' | 'upcoming'
type MyMenu = 'famous' | 'like' | 'review'
type Image = 'backdrop' | 'poster'
export const SITE_PATH = {
  home: '/home',
  my: '/profile',
  sign_in: '/auth/sign-in',
  sign_up: '/auth/sign-up',
  detail: (movieId: string | number) => `/detail/${movieId}`,
  list: (path: Movie) => `/list/${path}`,
  search: (keyword: string) => `/search?keyword=${keyword}`,
  my_menu: (path: MyMenu) => `/profile/${path}`,
  movie_modal: (movieId: string | number) => `/i/info/${movieId}`,
  image_modal: (movieId: string | number, imageType: Image, imageUrl: string) =>
    `/i/image/${movieId}/${imageType}/${imageUrl}`,
}
