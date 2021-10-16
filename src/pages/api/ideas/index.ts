/* eslint-disable import/no-anonymous-default-export */
import dbConnect from 'lib/dbConnect'
import type { NextApiRequest, NextApiResponse } from 'next'
import Idea from 'src/entities/idea.entity'

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await dbConnect()
  if (req.method === 'GET') {
    const ideas = await Idea.find()
    res.status(200).json({ success: true, data: ideas })
  } else if (req.method === 'POST') {
    const idea = req.body
    const resp = await Idea.create(idea)
    res.status(201).json({ success: true, data: resp })
  }
}
