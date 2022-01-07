import express, { Application } from 'express'

const app: Application = express()

const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => res.send('Hello from nodejs + express'))

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
