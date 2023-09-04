import express from 'express'
import cors from 'cors'
import { connectToDatabase } from './utils/db'
import config from './utils/config'
import events from './routes/events'
import { tokenExtractor } from './utils/middleware'
import staffLoginRouter from './routes/staffLogin'
import staffSignupRouter from './routes/staffSignup'
const app = express()
app.use(express.json())

// const allowedOrigins = ['http://localhost:3000']

// const options: cors.CorsOptions = {
//   origin: allowedOrigins,
// }

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors())

app.use(tokenExtractor as express.RequestHandler)
app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/events', events)
app.use('/staff-login', staffLoginRouter)
app.use('/staff-signup', staffSignupRouter)

const start = async (): Promise<void> => {
  await connectToDatabase()
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
  })
}

void start()

module.exports = app
