export function getImageWithDefault(url: string | null | undefined) {
  if (!url) return '/jpg/default-profile-image.jpg'

  return url
}
