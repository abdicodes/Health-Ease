import express from 'express'
import cors from 'cors'
import { connectToDatabase } from './utils/db'
import config from './utils/config'
import events from './routes/events'

const app = express()
app.use(express.json())

// const allowedOrigins = ['http://localhost:3000']

// const options: cors.CorsOptions = {
//   origin: allowedOrigins,
// }

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors())

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/events', events)

const start = async (): Promise<void> => {
  await connectToDatabase()
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
    // logger.info(`Server running on port ${PORT}`)
  })
}

void start()

module.exports = app
