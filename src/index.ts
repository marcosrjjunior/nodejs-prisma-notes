import express, { Application } from 'express'
import AuthController from './controllers/AuthController'
import { NotesController } from './controllers/NotesController'
import auth from './middlewares/auth'

const app: Application = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello from nodejs + express'))

const notesController = new NotesController()
app.get('/api/notes', auth, notesController.index)
app.post('/api/notes', auth, notesController.create)

app.post('/api/signup', AuthController.signup)
app.post('/api/signin', AuthController.signin)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
