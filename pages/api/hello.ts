// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getImage, listBuckets, listImages } from '@/lib/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: 'John Doe' })

  // const json = await listBuckets()
  const json = await getImage()
  res.status(200).json(json)
}
