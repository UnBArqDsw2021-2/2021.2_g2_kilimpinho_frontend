import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { api } from '@/services/api';
import { signin } from '@/services/userService';

// https://next-auth.js.org/configuration/initialization#advanced-initialization
// eslint-disable-next-line import/no-default-export
export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  api.defaults.headers.common.Cookie =
    req?.headers?.cookie || res?.req?.headers?.cookie!;

  const nextAuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: {
            label: 'Email',
            type: 'text',
            placeholder: 'email',
          },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          try {
            // Any object returned will be saved in `user` property of the JWT4
            console.log('cred,', credentials);
            const user = await signin({
              email: credentials?.email!,
              password: credentials?.password!,
            });

            const accessToken = user?.token;
            if (accessToken)
              res.setHeader(
                'Set-Cookie',
                `accessToken=${accessToken}; HttpOnly; Max-Age=86400; Path=/`
              );

            return { ...user };

            // If you return null or false then the credentials will be rejected
            // return null
            // You can also Reject this callback with an Error or with a URL:
            // throw new Error("error message") // Redirect to error page
            // throw "/path/to/redirect"        // Redirect to a URL
          } catch (error) {
            console.error('AUTHORIZE ERROR: ', error);

            throw new Error(error as string);
          }
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/',
      signUp: '/',
      signOut: '/',
      error: '/',
    },
    callbacks: {
      async signIn({ user }: { user: IUser }) {
        if (user) return true;

        return false;
      },
      redirect({ url, baseUrl }: any) {
        if (url.startsWith(baseUrl)) return url;
        // Allows relative callback URLs
        if (url.startsWith('/')) return new URL(url, baseUrl).toString();

        return baseUrl;
      },
      jwt: async ({ token, user }: any) => {
        if (token?.user) {
          return token;
        }

        console.log(user);

        if (user) {
          token.user = { ...user };
        }

        return token;
      },
      session: async ({ session, token }: { session: Session; token: any }) => {
        console.log(token);
        session.user = token.user.user;
        session.token = token;

        return session;
      },
    },
  };

  // @ts-ignore
  return await NextAuth(req, res, nextAuthOptions);
}