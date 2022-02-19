import { Request, Response } from 'express'
import { NotesRepository } from '../repositories/NotesRepository'
import { NotesService } from '../services/NotesService'

export class NotesController {
  private notesService: NotesService

  constructor() {
    const notesRepository = new NotesRepository()
    this.notesService = new NotesService(notesRepository)
  }

  index = async (req: Request, res: Response) => {
    const response = await this.notesService.index()
    return res.send(response)
  }

  create = async (req: Request, res: Response) => {
    const { title, content } = req.body

    const note = await this.notesService.create({ title, content })

    if (!note) {
      throw new Error('Student does not exists.')
    }

    return res.send(note)
  }
}
