import cookie from 'cookie'
import { cookies } from 'next/headers'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { signInFormSchema } from '@/features/auth/schema'
import { SITE_PATH } from '@/shared/constants'

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: SITE_PATH.sign_in,
    newUser: SITE_PATH.sign_up,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = await signInFormSchema.parseAsync(credentials)

        console.log(email, 'email')
        console.log(password, 'password')
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/user/sign-in`, {
          method: 'POST',
          headers: {
            accept: 'application/json',
          },
          body: JSON.stringify({
            email: email,
            pw: password,
          }),
        })
        let setCookie = authResponse.headers.get('Set-Cookie')
        if (setCookie) {
          const parsed = cookie.parse(setCookie)
          cookies().set('connect.sid', parsed['connect.sid'], parsed)
        }

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()

        return {
          email: user.email,
          nickname: user.nickname,
          profileUrl: user.profileUrl,
          ...user,
        }
      },
    }),
  ],
})
