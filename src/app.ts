import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message : 'Express working with typescript' })
})

app.get('/users', (_req, res) => {
  res.json({ message : 'Users route'})
})

export default app