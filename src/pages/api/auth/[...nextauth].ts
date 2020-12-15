import { NextApiHandler } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import prisma from '../../../utils/prisma'

const options = {
  site: 'https://deploy-preview-107--openchakra.netlify.app/',
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
}

console.log(options)

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler
