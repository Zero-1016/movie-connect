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
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_BASE_URL}/user/sign-in`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            pw: password,
          }),
        })
        const [accessToken, refreshToken] = [
          authResponse.headers.get('Set-Cookie1'),
          authResponse.headers.get('Set-Cookie2'),
        ]

        if (accessToken && refreshToken) {
          const [accessTokenParse, refreshTokenParse] = [cookie.parse(accessToken), cookie.parse(refreshToken)]
          cookies().set('Access-Token', accessTokenParse['Access-Token'], accessTokenParse)
          cookies().set('Refresh-Token', refreshTokenParse['Refresh-Token'], refreshTokenParse)
        }

        if (!authResponse.ok) {
          return null
        }

        const { user } = await authResponse.json()

        return {
          name: user.nickname,
          email: user.email,
          image: user.profileUrl,
        }
      },
    }),
  ],
})
