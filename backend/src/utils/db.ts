/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Sequelize } from 'sequelize'
import { Umzug, SequelizeStorage } from 'umzug'
import config from './config'

if (!config.DATABASE_URL) throw Error('Database URL is missing!')
const { DATABASE_URL }: { DATABASE_URL: string | undefined } = config
const sequelize = new Sequelize(DATABASE_URL)

const connectToDatabase = async () => {
  try {
    console.log(DATABASE_URL)
    await sequelize.authenticate()
    await runMigrations()
    console.log('database connected')
  } catch (err) {
    console.log(err)
    return process.exit(1)
  }

  return null
}

const migrationConf = {
  migrations: {
    glob: './src/migrations/*.ts',
  },
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger: console,
}

const runMigrations = async () => {
  const migrator = new Umzug(migrationConf)
  const migrations = await migrator.up()
  console.log('Migrations up to date', {
    files: migrations.map((mig) => mig.name),
  })
}

const rollbackMigration = async () => {
  await sequelize.authenticate()
  const migrator = new Umzug(migrationConf)
  await migrator.down()
}

export { connectToDatabase, sequelize, runMigrations, rollbackMigration }
