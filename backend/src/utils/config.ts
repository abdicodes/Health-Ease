import dotenv from 'dotenv'
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
dotenv.config()

interface Config {
  DATABASE_URL: string | undefined
  PORT: string | number | undefined
}

const config: Config = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || 5000,
}

export default config
