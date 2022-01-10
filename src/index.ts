import express, { Application } from 'express'
import NotesController from './controllers/NotesController'

const app: Application = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello from nodejs + express'))

app.get('/api/notes', NotesController.index)
app.post('/api/notes', NotesController.create)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
