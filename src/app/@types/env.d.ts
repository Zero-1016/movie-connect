export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_TMDB_BASE_URL: string
      NEXT_PUBLIC_TMDB_ACCESS_TOKEN: string
      NEXT_PUBLIC_API_MOCKING: 'enabled' | 'disabled'
      NEXT_PUBLIC_TMDB_IMAGE_URL: string
      NEXT_PUBLIC_LOCAL_BASE_URL: string
    }
  }
}
