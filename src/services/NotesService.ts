import { NotesRepository } from '../repositories/NotesRepository'

export class NotesService {
  constructor(private notesRepository: NotesRepository) {}

  index = async () => {
    return this.notesRepository.findMany()
  }

  create = async (data: any) => {
    const note = await this.notesRepository.store(data)

    if (!note) {
      throw new Error('Error to create a note.')
    }

    return note
  }
}
