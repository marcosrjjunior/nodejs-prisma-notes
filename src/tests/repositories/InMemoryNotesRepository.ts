import { Note, Prisma } from '@prisma/client'
import { NotesRepository } from '../../repositories/NotesRepository'

export class InMemoryNotesRepository implements NotesRepository {
  public notes: Note[] = []

  findMany = async () => {
    return this.notes
  }

  store = async (data: any) => {
    const index = this.notes.push({
      ...data,
      id: Math.floor(Math.random() * 999),
    })

    return this.notes[index - 1]
  }
}
