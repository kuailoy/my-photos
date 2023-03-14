import type { User } from './user'

import { sessionOptions } from '@/lib/session'
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next'
import hash from 'object-hash'

export const config = {
  api: {
    bodyParser: process.env.NODE_ENV !== 'production',
  },
}

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const { username } = await req.body
    const { s } = await req.query
    const VALUE = hash({ name: 'kk' })
    if (s === VALUE) {
      const user = { isLoggedIn: true, login: VALUE, avatarUrl: '' } as User
      req.session.user = user
      await req.session.save()
      res.json(user)
    } else {
      res.send(false)
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)
