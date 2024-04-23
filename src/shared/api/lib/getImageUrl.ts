export const getImageUrl = (path: string, size = 400) => {
  return `https://image.tmdb.org/t/p/w${size}${path}`
}
