import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from './shared/config/config'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(20821, '0.0.0.0')
  console.log(`[${new Date().toISOString()}] Server listening on port [20821] [${config.env}] mode!`)
}

(async () => await bootstrap())()
