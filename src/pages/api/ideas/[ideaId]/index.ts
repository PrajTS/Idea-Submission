/* eslint-disable import/no-anonymous-default-export */
import dbConnect from 'lib/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import Idea from 'src/entities/idea.entity'

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'GET') {
    const { ideaId } = req.query
    await dbConnect()
    const idea = await Idea.findById(ideaId)
    res.status(200).json({ success: true, data: idea })
  }
}
