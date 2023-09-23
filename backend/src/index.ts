import express from 'express'
import cors from 'cors'
import { connectToDatabase } from './utils/db'
import config from './utils/config'
import events from './routes/events'
import { tokenExtractor } from './utils/middleware'
import staffLoginRouter from './routes/staffLogin'
import staffSignupRouter from './routes/staffSignup'
import patientLoginRouter from './routes/patientLogin'
import patientSignupRouter from './routes/patientSignup'
import rolesRouter from './routes/staffRoles'
import staffQueryRouter from './routes/staffQuery'

const app = express()
app.use(express.json())

const allowedOrigins = '*'

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors(options))

app.use(tokenExtractor as express.RequestHandler)
app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/api/events', events)
app.use('/api/staff-login', staffLoginRouter)
app.use('/api/staff-signup', staffSignupRouter)
app.use('/api/patient-login', patientLoginRouter)
app.use('/api/patient-signup', patientSignupRouter)
app.use('/api/roles', rolesRouter)
app.use('/api/staff-query', staffQueryRouter)

const start = async (): Promise<void> => {
  await connectToDatabase()
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
  })
}

void start()

module.exports = app
