export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_TMDB_BASE_URL: string
      NEXT_PUBLIC_TMDB_ACCESS_TOKEN: string
    }
  }
}
