import { InMemoryNotesRepository } from '../tests/repositories/InMemoryNotesRepository'
import { NotesService } from './NotesService'

describe('Notes service', () => {
  it('should create a note', async () => {
    const notesRepository = new InMemoryNotesRepository()
    const notesService = new NotesService(notesRepository)

    const response = await notesService.create({
      title: 'New note',
      content: 'New content',
    })

    expect(response).toBeTruthy()
  })
})
