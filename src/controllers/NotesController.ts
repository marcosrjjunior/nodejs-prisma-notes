import { Request, Response } from 'express'
import prisma from '../lib/prisma'

const index = async (req: Request, res: Response) => {
  const response = await prisma.note.findMany()

  return res.send(response)
}

const create = async (req: Request, res: Response) => {
  const { title, content } = req.body

  const response = await prisma.note.create({
    data: {
      title,
      content,
    },
  })

  return res.send(response)
}

export default { index, create }
