import dotenv from 'dotenv'
dotenv.config()

interface Config {
  DATABASE_URL: string | undefined
  PORT: string | number
  SECRET: string
}

const config: Config = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || 5000,
  SECRET:
    process.env.SECRET ||
    '62suB3jR0377nhb5cTvj4A1MfqvJnNQssNqi0aYUzgZm2CW8dCnlqsViHALOPMZ',
}

export default config
