import 'reflect-metadata'
import app from './app'

const port = process.env.PORT || 3000

const start = async () => {

  app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
  })
}

start().catch(console.error)