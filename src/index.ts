import 'reflect-metadata'
import { createConnection } from 'typeorm';
import app from './app'

const port = process.env.PORT || 3000

const start = async () => {

  await createConnection();

  app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
  })
}

start().catch(console.error)