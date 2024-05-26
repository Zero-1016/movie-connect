export {}

declare module 'next-auth' {
  interface User {
    email: string
  }
  interface Account {}
  interface Session {
    email: string
  }
}
