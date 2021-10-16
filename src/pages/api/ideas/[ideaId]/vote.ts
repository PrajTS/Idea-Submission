/* eslint-disable import/no-anonymous-default-export */
import dbConnect from 'lib/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import Idea from 'src/entities/idea.entity'

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { ideaId, isUpvote } = req.query
  console.log(ideaId)
  await dbConnect()
  await Idea.updateOne(
    {
      _id: ideaId,
    },
    { $inc: { votes: isUpvote === 'true' ? 1 : -1 } },
  )
  res.status(200).json({ success: true })
}
