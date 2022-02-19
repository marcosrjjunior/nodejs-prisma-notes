import { Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export class NotesRepository {
  findMany = async () => {
    const response = await prisma.note.findMany()

    return response
  }

  store = async (data: Prisma.NoteCreateInput) => {
    const response = await prisma.note.create({
      data,
    })

    return response
  }
}
